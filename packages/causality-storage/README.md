# causal-net.utils 

This causal-net.storage is a sub-module for [causality](https://red-gold.github.io/causality-docs/) project.
This model provide storage instance for storage content and building blocks for extending new store.

### indexDBStorage 
- Provide the isomorphic high performance key-value storage based on indexDB.

### StorageMixins
- Mixins storage for mix with Pipeline class.

### BaseStorage
- Abstract storage class. Extended store class must compliance with LevelDB abstract specs, check the abstract wrapper as[levelup](https://www.npmjs.com/package/levelup).

### CSVFileMixins 
- Mixins for read/write/fetch CSV file. 

### PNGFileMixins
- Mixins for read/write/fetch PNG file.

### TextFileMixins
- Mixins for read/write/fetch Text file.