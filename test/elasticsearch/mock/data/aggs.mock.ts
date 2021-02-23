/**
 * 專案名稱： @wistroni40/es-flatter
 * 部門代號： ML8100
 * 檔案說明： 聚合假資料
 * @CREATE Tue Feb 23 2021 上午10:57:02
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

/**
 * 聚合假資料
 */
export const MOCK_AGGS = {
  took: 1445,
  timed_out: false,
  _shards: { total: 100, successful: 100, skipped: 0, failed: 0 },
  hits: { total: 125, max_score: 0.0, hits: [] },
  aggregations: {
    'system_id.raw': {
      doc_count_error_upper_bound: 0,
      sum_other_doc_count: 0,
      buckets: [
        {
          key: 'pcbam',
          doc_count: 15,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'rate_failure',
                doc_count: 5,
                'SUM(amount)': { value: 20574.720703125 },
              },
              {
                key: 'time_analysis',
                doc_count: 5,
                'SUM(amount)': { value: 143.12289810180664 },
              },
              {
                key: 'time_response',
                doc_count: 5,
                'SUM(amount)': { value: 57.24915885925293 },
              },
            ],
          },
        },
        {
          key: 'mtvac',
          doc_count: 10,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 5,
                'SUM(amount)': { value: 128.54055786132812 },
              },
              {
                key: 'time_offline',
                doc_count: 5,
                'SUM(amount)': { value: 0.0 },
              },
            ],
          },
        },
        {
          key: 'psappm',
          doc_count: 8,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 4,
                'SUM(amount)': { value: 30.604896545410156 },
              },
              {
                key: 'time_offline',
                doc_count: 4,
                'SUM(amount)': { value: 147863.65625 },
              },
            ],
          },
        },
        {
          key: 'accs',
          doc_count: 6,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'power_consumption_d',
                doc_count: 6,
                'SUM(amount)': { value: 45528.5859375 },
              },
            ],
          },
        },
        {
          key: 'iws',
          doc_count: 5,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 4,
                'SUM(amount)': { value: 694.3967895507812 },
              },
              {
                key: 'power_consumption_d',
                doc_count: 1,
                'SUM(amount)': { value: 1329.126953125 },
              },
            ],
          },
        },
        {
          key: 'autopicking',
          doc_count: 4,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 4,
                'SUM(amount)': { value: 414.0662536621094 },
              },
            ],
          },
        },
        {
          key: 'autopo',
          doc_count: 3,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 3,
                'SUM(amount)': { value: 1361.0177001953125 },
              },
            ],
          },
        },
        {
          key: 'dpm',
          doc_count: 3,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 3,
                'SUM(amount)': { value: 562.4099578857422 },
              },
            ],
          },
        },
        {
          key: 'faoms',
          doc_count: 3,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 3,
                'SUM(amount)': { value: 10.458815574645996 },
              },
            ],
          },
        },
        {
          key: 'imqm',
          doc_count: 3,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'rate_defect',
                doc_count: 1,
                'SUM(amount)': { value: 42.33677291870117 },
              },
              {
                key: 'time_iqc',
                doc_count: 1,
                'SUM(amount)': { value: 1236.2578125 },
              },
              {
                key: 'time_sqm',
                doc_count: 1,
                'SUM(amount)': { value: 30.604896545410156 },
              },
            ],
          },
        },
        {
          key: 'psarc',
          doc_count: 3,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'operation_time',
                doc_count: 1,
                'SUM(amount)': { value: 0.0 },
              },
              {
                key: 'power_consumption_eco',
                doc_count: 1,
                'SUM(amount)': { value: 6.489609718322754 },
              },
              {
                key: 'power_consumption_off',
                doc_count: 1,
                'SUM(amount)': { value: 3306.413330078125 },
              },
            ],
          },
        },
        {
          key: 'cacic',
          doc_count: 2,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 2,
                'SUM(amount)': { value: 180.02879333496094 },
              },
            ],
          },
        },
        {
          key: 'dims',
          doc_count: 2,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_examination',
                doc_count: 2,
                'SUM(amount)': { value: 108.01727676391602 },
              },
            ],
          },
        },
        {
          key: 'esd',
          doc_count: 2,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'problem_solving',
                doc_count: 2,
                'SUM(amount)': { value: 0.0 },
              },
            ],
          },
        },
        {
          key: 'fem',
          doc_count: 2,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 2,
                'SUM(amount)': { value: 689.2531127929688 },
              },
            ],
          },
        },
        {
          key: 'ism',
          doc_count: 2,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_examination',
                doc_count: 2,
                'SUM(amount)': { value: 193.56524658203125 },
              },
            ],
          },
        },
        {
          key: 'mmrac',
          doc_count: 2,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 2,
                'SUM(amount)': { value: 360.0575866699219 },
              },
            ],
          },
        },
        {
          key: 'mrbt',
          doc_count: 2,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 2,
                'SUM(amount)': { value: 180.02879333496094 },
              },
            ],
          },
        },
        {
          key: 'rmm',
          doc_count: 2,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'equipment_maintenanc',
                doc_count: 1,
                'SUM(amount)': { value: 0.0 },
              },
              {
                key: 'report_time',
                doc_count: 1,
                'SUM(amount)': { value: 0.0 },
              },
            ],
          },
        },
        {
          key: 'smtcnc',
          doc_count: 2,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'equipment_maintenanc',
                doc_count: 1,
                'SUM(amount)': { value: 108.01728057861328 },
              },
              {
                key: 'report_time',
                doc_count: 1,
                'SUM(amount)': { value: 504.08062744140625 },
              },
            ],
          },
        },
        {
          key: '3daoiai',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              { key: 'time_cost', doc_count: 1, 'SUM(amount)': { value: 0.0 } },
            ],
          },
        },
        {
          key: 'ad',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 128.5919952392578 },
              },
            ],
          },
        },
        {
          key: 'ahu',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 360.0575866699219 },
              },
            ],
          },
        },
        {
          key: 'atsap',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_programming',
                doc_count: 1,
                'SUM(amount)': { value: 0.0 },
              },
            ],
          },
        },
        {
          key: 'atsur',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_response',
                doc_count: 1,
                'SUM(amount)': { value: 20.917631149291992 },
              },
            ],
          },
        },
        {
          key: 'beas',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 180.02879333496094 },
              },
            ],
          },
        },
        {
          key: 'carms',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 360.0575866699219 },
              },
            ],
          },
        },
        {
          key: 'cgms',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 45.007198333740234 },
              },
            ],
          },
        },
        {
          key: 'cims',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 90.01439666748047 },
              },
            ],
          },
        },
        {
          key: 'ctmd',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 771.552001953125 },
              },
            ],
          },
        },
        {
          key: 'dams',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 90.01439666748047 },
              },
            ],
          },
        },
        {
          key: 'dcacs',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 1800.2879638671875 },
              },
            ],
          },
        },
        {
          key: 'didais',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 360.0575866699219 },
              },
            ],
          },
        },
        {
          key: 'dsm',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_analysis',
                doc_count: 1,
                'SUM(amount)': { value: 273289.75 },
              },
            ],
          },
        },
        {
          key: 'ens',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 1543.10400390625 },
              },
            ],
          },
        },
        {
          key: 'fems',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 90.01439666748047 },
              },
            ],
          },
        },
        {
          key: 'fod',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 642.9600219726562 },
              },
            ],
          },
        },
        {
          key: 'gaacs',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 90.01439666748047 },
              },
            ],
          },
        },
        {
          key: 'gcm',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 45.007198333740234 },
              },
            ],
          },
        },
        {
          key: 'hvms',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 180.02879333496094 },
              },
            ],
          },
        },
        {
          key: 'llm',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 180.02879333496094 },
              },
            ],
          },
        },
        {
          key: 'mdais',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 540.08642578125 },
              },
            ],
          },
        },
        {
          key: 'mfs',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 1543.10400390625 },
              },
            ],
          },
        },
        {
          key: 'mlms',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 1028.7359619140625 },
              },
            ],
          },
        },
        {
          key: 'mms',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 900.1439819335938 },
              },
            ],
          },
        },
        {
          key: 'mts',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 60.30964660644531 },
              },
            ],
          },
        },
        {
          key: 'oacic',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 90.01439666748047 },
              },
            ],
          },
        },
        {
          key: 'ods',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 60.30964660644531 },
              },
            ],
          },
        },
        {
          key: 'osl',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 90.01439666748047 },
              },
            ],
          },
        },
        {
          key: 'pascs',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 90.01439666748047 },
              },
            ],
          },
        },
        {
          key: 'pcd',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 1285.9200439453125 },
              },
            ],
          },
        },
        {
          key: 'pdd',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 321.4800109863281 },
              },
            ],
          },
        },
        {
          key: 'petfl',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 9968.1943359375 },
              },
            ],
          },
        },
        {
          key: 'pmepl',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 1134.181396484375 },
              },
            ],
          },
        },
        {
          key: 'pstd',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 2646.42333984375 },
              },
            ],
          },
        },
        {
          key: 'read',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 540.08642578125 },
              },
            ],
          },
        },
        {
          key: 'sts',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 45.007198333740234 },
              },
            ],
          },
        },
        {
          key: 'tdais',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_dl',
                doc_count: 1,
                'SUM(amount)': { value: 180.02879333496094 },
              },
            ],
          },
        },
        {
          key: 'ted',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 642.9600219726562 },
              },
            ],
          },
        },
        {
          key: 'terf',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              { key: 'cost_idl', doc_count: 1, 'SUM(amount)': { value: 0.0 } },
            ],
          },
        },
        {
          key: 'towerms',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_response',
                doc_count: 1,
                'SUM(amount)': { value: 54.064361572265625 },
              },
            ],
          },
        },
        {
          key: 'towerwh',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'report_time',
                doc_count: 1,
                'SUM(amount)': { value: 0.0 },
              },
            ],
          },
        },
        {
          key: 'ud',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'cost_idl',
                doc_count: 1,
                'SUM(amount)': { value: 1735.991943359375 },
              },
            ],
          },
        },
        {
          key: 'wegm',
          doc_count: 1,
          'kpi_id.raw': {
            doc_count_error_upper_bound: 0,
            sum_other_doc_count: 0,
            buckets: [
              {
                key: 'time_inspection',
                doc_count: 1,
                'SUM(amount)': { value: 90.01439666748047 },
              },
            ],
          },
        },
      ],
    },
  },
};
