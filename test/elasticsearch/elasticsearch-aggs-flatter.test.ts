/**
 * 專案名稱： @wistroni40/es-flatter
 * 部門代號： ML8100
 * 檔案說明： ElasticSearch聚合資料攤平工具單元測試
 * @CREATE Tue Feb 23 2021 上午10:54:28
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import * as should from 'should';
import { ElasticSearchAggsFlatter } from '../../src';
import { MOCK_AGGS } from './mock';

/**
 * ElasticSearch聚合資料攤平工具單元測試
 */
describe('ElasticSearchAggsFlatter', () => {
  /**
   * 測試取得扁平化後的資料內容
   */
  it('getBody: Get flattern data from aggregations', () => {
    // Arrange
    const aggs = MOCK_AGGS;
    const expected = [
      {
        'system_id.raw': 'pcbam',
        'kpi_id.raw': 'rate_failure',
        'SUM(amount)': 20574.720703125,
      },
    ];

    // Act
    const result = new ElasticSearchAggsFlatter(aggs).getBody();

    // Assert
    should(result.length).be.equal(75);
    should(result).containDeep(expected);
  });
});
