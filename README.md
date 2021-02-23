# wistroni40-es-flatter

# Install

```
npm i wistroni40-es-flatter --save
```

# Table of Contents

- [Quickstart](#quickstart)
- [Feature](#feature)
- [API](#api)
  - [ElasticSearchAggsFlatter](#BnElasticSearchAggsFlatterftTemplate)

# Quickstart

index.ts

```typescript
const flattedResult = new ElasticSearchAggsFlatter(result).getBody<any>();
```

[Full Example](https://github.com/SteveLin100132/wistroni40-es-flatter/blob/master/examples/index.ts)

# Feature

* 將查詢到的ElasticSearch Aggregations扁平化

# API

## **ElasticSearchAggsFlatter**

**Abstract Class**，ElasticSearch聚合資料攤平工具

### constructor

BnftTemplate的建構值

Parameter | Type | Required | Default | Description
|:-----|:-----:|:-----:|:-----:|:-----|
| data | any | Required | ```undefined``` | 要扁平化的聚合數據 |

### Methods

#### getBody

取得扁平化後的資料內容

Parameter | Type | Required | Default | Description
|:-----|:-----:|:-----:|:-----:|:-----|
| returns | T | Required | ```undefined``` | 回傳扁平化後的資料內容 |
