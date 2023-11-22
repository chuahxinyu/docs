---
title: Dask
---

> [What is Dask? A Bried Introduction | Dask YouTube](https://www.youtube.com/watch?v=_y1GDJ1cFOQ)
> [What is Dask? And Who Uses It? Use Case Examples](https://www.youtube.com/watch?v=KyZ722VO15g)

## Introduction

- a dynamic task scheduler
  - it decides how to allocate resources to tasks
- scales PyData libraries with parallel computing
  - pandas, numpy, scikit-learn, xgboost, etc.
- allows you to work with more data in less time
- Analogy: Pandas is a race car, Dask is a big engine
  - same, familiar interface, but Dask is faster
  - ![](/src/assets/dask/dask-analogy.png)

> [Dask Tutorial | Intro to Dask | The Power of Parallel Computing | Module One](https://www.youtube.com/watch?v=vQkho0d2RaQ)

## Why/When we need parallel computing

- high data size
- high processing time

![](/src/assets/dask/dask-why.png)

```python
# Create a 665 million row dataset
ddf = dask.datasets.timeseries(
    start="2000-01-01",
    end="2020-12-31",
    freq="1s",
    partition_freq="7d",
    seed=42,
)

# Write it to a parquet file
ddf.to_parquet("big_file.parquet")

# 💀 Pandas can't handle this big dataset (on a machine with 16GB RAM)
# df = pd.read_parquet("big_file.parquet")  # This will give us a memory error if uncommented

# 🎉 Dask can handle it
ddf = dd.read_parquet("big_file.parquet")

%%time # This is a Jupyter Notebook magic command to measure the execution time of the cell
ddf["id"].nunique().compute()
```

## Why Dask is faster than Pandas

- Pandas is single-threaded
  - it can only use one CPU core
  - ie. if you have 4 cores, pandas will only use 1/4 of your CPU (the other 3/4 will be idle)
    - ![](/src/assets/dask/pandas-single-cpu.png)
- Dask is multi-threaded
  - it can use all CPU cores
  - ie. if you have 4 cores, Dask will use all 8 of your CPU
  - ![](/src/assets/dask/dask-single-cpu.png)
  - it can also use multiple machines (distributed processing)
    - ie. if you have 8 cores on 2 machines, Dask will use all 16 of your CPU
    - ![](/src/assets/dask/dask-multiple-cpus.png)

## Data Structures
- Examples
  - pandas + dask = Dask DataFrame
  - numpy + dask = Dask Array
  - scikit-learn + dask = Dask ML
  - xgboost + dask = Dask XGBoost