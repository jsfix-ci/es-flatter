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
/**
 * ElasticSearch聚合資料攤平工具
 */
export declare class ElasticSearchAggsFlatter {
    private data;
    /**
     * 扁平Buckets暫存
     */
    private flattenBuckets;
    /**
     * @param data 要扁平化的聚合資料
     */
    constructor(data: any);
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
    private removeNestedAndFilters;
    /**
     * 資料擴充
     *
     * @method private
     * @param out       要輸出的資料
     * @param addtional 額外擴充的資料
     * @return 回傳擴充完畢的資料
     */
    private extend;
    /**
     * 處理每一列的資料
     *
     * @method private
     * @param bucket            資料叢
     * @param additionalColumns 額外的欄位
     * @param bucketName        資料叢名稱
     * @return 回傳處理後的列資料
     */
    private getRows;
    /**
     * 填充欄位給特定的聚合資料
     *
     * @method private
     * @param obj   被填充的資料
     * @param value 要填充的值
     * @param field 填充的欄位名稱
     */
    private fillFieldsForSpecificAggregation;
    /**
     * 取得子資料叢
     *
     * @method private
     * @param bucket 資料叢
     * @return 回傳子資料叢
     */
    private getSubBuckets;
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
    getHead(): string[];
    /**
     * 取得扁平化後的資料內容
     *
     * @method public
     * @return 回傳扁平化後的資料內容
     */
    getBody<T = any>(): T[];
    /**
     * 取得扁平化後的資料筆數
     *
     * @method public
     * @return 回傳扁平化後的資料筆數
     */
    getTotal(): number;
}
