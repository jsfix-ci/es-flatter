/**
 * 專案名稱： @wistroni40/es-flatter
 * 部門代號： ML8100
 * 檔案說明： ElasticSearch聚合資料攤平範例
 * @CREATE Tue Feb 23 2021 上午10:38:29
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Client } from '@elastic/elasticsearch';
import * as esb from 'elastic-builder';
import { ElasticSearchAggsFlatter } from './../src';

/**
 * -----------------------------------------------------------------------------
 * Defined Data Model
 * -----------------------------------------------------------------------------
 */

interface DataModel {
  systemId: string;
  kpiId: string;
  amount: number;
}

/**
 * -----------------------------------------------------------------------------
 * Create ElasticSearch Client
 * -----------------------------------------------------------------------------
 */

const client = new Client({ node: 'http://10.66.28.41:9200/' });

/**
 * -----------------------------------------------------------------------------
 * Get ElasticSearch Aggregations
 * -----------------------------------------------------------------------------
 */

(async () => {
  const query = esb
    .requestBodySearch()
    .query(
      esb
        .boolQuery()
        .must([esb.rangeQuery('evt_dt').gte(1613923200000).lt(1614009600000)]),
    )
    .agg(
      esb
        .termsAggregation('systemId', 'system_id.raw')
        .agg(
          esb
            .termsAggregation('kpiId', 'kpi_id.raw')
            .agg(esb.sumAggregation('amount', 'amount')),
        ),
    );

  const aggs = await client.search({
    index: '1benefit_ntd*',
    body: query.toJSON(),
  });

  const result = new ElasticSearchAggsFlatter(aggs.body).getBody<DataModel>();
  console.log(JSON.stringify(result));
})();
