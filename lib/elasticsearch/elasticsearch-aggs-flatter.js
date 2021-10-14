"use strict";
/**
 * 專案名稱： @wistroni40/es-flatter
 * 部門代號： ML8100
 * 檔案說明： ElasticSearch聚合資料攤平工具
 * @CREATE Mon Feb 22 2021 下午5:35:47
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElasticSearchAggsFlatter = void 0;
/**
 * ElasticSearch聚合資料攤平工具
 */
class ElasticSearchAggsFlatter {
    /**
     * @param data 要扁平化的聚合資料
     */
    constructor(data) {
        this.data = data;
        // 移除數據中的巢狀結構
        this.removeNestedAndFilters(this.data.aggregations);
        // 取得扁平化後的資料
        this.flattenBuckets = this.getRows(this.data.aggregations, {});
    }
    /**
     * ---------------------------------------------------------------------------
     * @NOTE 格式處理
     * ---------------------------------------------------------------------------
     */
    /**
     * 移除聚合中的巢狀結構
     *
     * @method private
     * @param aggs 聚合資料
     */
    removeNestedAndFilters(aggs) {
        for (const field in aggs) {
            if (field !== undefined) {
                if (field.endsWith('@NESTED') ||
                    field.endsWith('@FILTER') ||
                    field.endsWith('@NESTED_REVERSED') ||
                    field.endsWith('@CHILDREN')) {
                    delete aggs[field].doc_count;
                    delete aggs[field].key;
                    const leftField = Object.keys(aggs[field])[0];
                    aggs[leftField] = aggs[field][leftField];
                    delete aggs[field];
                    this.removeNestedAndFilters(aggs);
                }
                if (typeof aggs[field] === 'object') {
                    this.removeNestedAndFilters(aggs[field]);
                }
            }
        }
    }
    /**
     * 資料擴充
     *
     * @method private
     * @param out       要輸出的資料
     * @param addtional 額外擴充的資料
     * @return 回傳擴充完畢的資料
     */
    extend(out, addtional) {
        out = out || {};
        for (const key in addtional) {
            if (addtional.hasOwnProperty(key)) {
                out[key] = addtional[key];
            }
        }
        return out;
    }
    /**
     * 處理每一列的資料
     *
     * @method private
     * @param bucket            資料叢
     * @param additionalColumns 額外的欄位
     * @param bucketName        資料叢名稱
     * @return 回傳處理後的列資料
     */
    getRows(bucket, additionalColumns, bucketName) {
        let rows = [];
        const subBuckets = this.getSubBuckets(bucket);
        let subBucketName;
        let newAdditionalColumns = {};
        if (subBuckets.length > 0) {
            subBuckets.forEach((element) => {
                subBucketName = element.bucketName;
                const subBucket = element.bucket;
                const stats = element.stats;
                const statsName = element.statsName;
                // bucket without parents.
                if (bucketName !== undefined) {
                    const newColumn = {};
                    newColumn[bucketName] = bucket.key;
                    if (statsName && stats) {
                        newColumn[statsName] = stats;
                    }
                    newAdditionalColumns = this.extend(newColumn, additionalColumns);
                }
                const newRows = this.getRows(subBucket, newAdditionalColumns, subBucketName);
                rows = [...rows, ...newRows];
            });
        }
        else {
            const obj = this.extend({}, additionalColumns);
            if (bucketName !== undefined) {
                if (bucketName !== undefined) {
                    if (bucket.hasOwnProperty('key_as_string')) {
                        obj[bucketName] = bucket.key;
                        obj[`${bucketName}_as_string`] = bucket.key_as_string;
                    }
                    else {
                        obj[bucketName] = bucket.key;
                    }
                }
            }
            for (const field in bucket) {
                if (field !== undefined) {
                    const bucketValue = bucket[field];
                    if (bucketValue.buckets !== undefined) {
                        const newRows = this.getRows(bucketValue, newAdditionalColumns, subBucketName);
                        rows = [...rows, ...newRows];
                        continue;
                    }
                    if (bucketValue.value !== undefined) {
                        if ('value_as_string' in bucket[field]) {
                            obj[field] = bucketValue.value_as_string;
                        }
                        else {
                            obj[field] = bucketValue.value;
                        }
                    }
                    else {
                        if (typeof bucketValue === 'object') {
                            this.fillFieldsForSpecificAggregation(obj, bucketValue, field);
                        }
                    }
                }
            }
            rows.push(obj);
        }
        return rows;
    }
    /**
     * 填充欄位給特定的聚合資料
     *
     * @method private
     * @param obj   被填充的資料
     * @param value 要填充的值
     * @param field 填充的欄位名稱
     */
    fillFieldsForSpecificAggregation(obj, value, field) {
        for (const key in value) {
            if (key === 'values') {
                this.fillFieldsForSpecificAggregation(obj, value[key], field);
            }
            else {
                // obj[field + '_' + key] = value[key];
                if (obj[field] === undefined) {
                    obj[field] = {};
                }
                obj[field][key] = value[key];
            }
        }
    }
    /**
     * 取得子資料叢
     *
     * @method private
     * @param bucket 資料叢
     * @return 回傳子資料叢
     */
    getSubBuckets(bucket) {
        let subBuckets = [];
        let stats;
        let statsField;
        for (const field in bucket) {
            if (field.endsWith('_stats')) {
                statsField = field;
                stats = bucket[field];
            }
        }
        for (const field in bucket) {
            if (field !== undefined) {
                const buckets = bucket[field].buckets;
                if (buckets !== undefined) {
                    buckets.forEach((element) => {
                        if (statsField) {
                            subBuckets.push({
                                bucketName: field,
                                bucket: element,
                                statsName: statsField,
                                stats,
                            });
                        }
                        else {
                            subBuckets.push({ bucketName: field, bucket: element });
                        }
                    });
                }
                else {
                    const innerAgg = bucket[field];
                    for (const innerField in innerAgg) {
                        if (innerField !== undefined) {
                            if (typeof innerAgg[innerField] === 'object') {
                                const innerBuckets = this.getSubBuckets(innerAgg[innerField]);
                                subBuckets = [...subBuckets, ...innerBuckets];
                            }
                        }
                    }
                }
            }
        }
        return subBuckets;
    }
    /**
     * ---------------------------------------------------------------------------
     * @NOTE 處理後的資料
     * ---------------------------------------------------------------------------
     */
    /**
     * 取得扁平化後的資料標題
     *
     * @method public
     * @return 回傳扁平化後的資料標題
     */
    getHead() {
        const head = [];
        this.flattenBuckets.forEach((element) => {
            const keys = Object.keys(element);
            keys.forEach(key => {
                if (head.indexOf(key) === -1) {
                    head.push(key);
                }
            });
        });
        return head;
    }
    /**
     * 取得扁平化後的資料內容
     *
     * @method public
     * @return 回傳扁平化後的資料內容
     */
    getBody() {
        this.flattenBuckets = this.flattenBuckets.filter(item => Object.keys(item).length > 0);
        return this.flattenBuckets;
    }
    /**
     * 取得扁平化後的資料筆數
     *
     * @method public
     * @return 回傳扁平化後的資料筆數
     */
    getTotal() {
        return this.flattenBuckets.length;
    }
}
exports.ElasticSearchAggsFlatter = ElasticSearchAggsFlatter;
