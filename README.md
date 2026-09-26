# JavaScript Practice & Interview Questions

A comprehensive, curated collection of **105 JavaScript practice problems** structured across 4 progressive difficulty levels. Designed for deliberate practice and interview preparation.

---

## 📁 Repository Structure

```text
js/
├── level-1-beginner/         # 25 foundational questions (Strings, Arrays, Loops, Objects)
├── level-2-intermediate/     # 25 intermediate questions (Transformations, Recursion, Closures, this)
├── level-3-advanced/         # 25 advanced questions (Prototypes, Promises, Async, Event Loop)
└── level-4-interview/        # 30 senior interview questions (Concurrency, Caching, Proxies, DAG)
```

---

## 📚 Curriculum & Problem Index

### 🟢 Level 1 — Beginner (25 Questions)
Foundational JavaScript logic, loops, conditions, array and string manipulation, basic functions.

| # | File | Topic / Focus |
|---|------|---------------|
| 01 | `01-reverseString.js` | Reverse a string without built-in methods |
| 02 | `02-palindromeCheck.js` | Palindrome detection |
| 03 | `03-findMissingNumber.js` | Contiguous sequence missing number |
| 04 | `04-countOccurrences.js` | Frequency count of array elements |
| 05 | `05-removeDuplicates.js` | Deduplicating array maintaining order |
| 06 | `06-secondLargest.js` | Finding 2nd largest distinct number |
| 07 | `07-firstNonRepeatingChar.js` | First non-repeating character in string |
| 08 | `08-findCommonElements.js` | Intersection of two arrays |
| 09 | `09-basicDebounce.js` | Basic debounce function stub |
| 10 | `10-basicThrottle.js` | Basic throttle function stub |
| 11 | `11-sumOfArray.js` | Array summation |
| 12 | `12-findMaxMin.js` | Single-pass min & max extraction |
| 13 | `13-filterEvenNumbers.js` | Parity partitioning (even/odd) |
| 14 | `14-countVowels.js` | Vowel counting across string |
| 15 | `15-titleCaseString.js` | String title casing |
| 16 | `16-factorial.js` | Factorial computation |
| 17 | `17-fizzBuzz.js` | FizzBuzz sequence generator |
| 18 | `18-chunkArray.js` | Array chunking into fixed sizes |
| 19 | `19-flattenArrayBasic.js` | Flatten 2D array (1-level deep) |
| 20 | `20-mergeSortedArrays.js` | O(n+m) merge of two sorted arrays |
| 21 | `21-invertObjectKeyValue.js` | Object key-value inversion |
| 22 | `22-checkAnagram.js` | Valid anagram verification |
| 23 | `23-longestWord.js` | Finding longest word in sentence |
| 24 | `24-truncateString.js` | String truncation with ellipsis |
| 25 | `25-arrayDifference.js` | Array difference (A  B) |

---

### 🟡 Level 2 — Intermediate (25 Questions)
Array/object transformations, grouping, sorting, searching, nested structures, basic recursion, closures, and `this`.

| # | File | Topic / Focus |
|---|------|---------------|
| 01 | `01-groupByProperty.js` | Group objects by key/property |
| 02 | `02-countWordFrequency.js` | Word frequency ignoring punctuation/case |
| 03 | `03-deepObjectLookup.js` | Safe path property access (`get`) |
| 04 | `04-sortByMultipleKeys.js` | Multi-field criteria sorting |
| 05 | `05-twoSum.js` | O(n) Two Sum index finder |
| 06 | `06-flattenNestedArrayDepth.js` | Array flattening up to depth $K$ |
| 07 | `07-aggregateTransactionData.js` | Financial records rollup & aggregation |
| 08 | `08-customFilterMapUsingReduce.js` | Recreating map & filter using reduce |
| 09 | `09-simpleClosureCounter.js` | Encapsulated state counter |
| 10 | `10-explicitBindingThis.js` | Explicit execution with call/apply/bind |
| 11 | `11-recursiveNestedSum.js` | Arbitrarily nested array summation |
| 12 | `12-uniqueValuesByKey.js` | Distinct value extraction from object array |
| 13 | `13-pivotObjectData.js` | Key-value pair pivoting |
| 14 | `14-stringCompression.js` | Run-length string compression |
| 15 | `15-binarySearch.js` | Binary search on sorted array |
| 16 | `16-objectDeepMergeBasic.js` | Recursive object merging |
| 17 | `17-findDuplicatesWithIndices.js` | Mapping duplicates to index arrays |
| 18 | `18-differenceBetweenObjects.js` | Object difference comparator |
| 19 | `19-shuffleArray.js` | Fisher-Yates uniform shuffle |
| 20 | `20-curryBasic.js` | Fixed 3-argument currying |
| 21 | `21-onceFunction.js` | Single execution function wrapper |
| 22 | `22-memoizeBasic.js` | Pure single-arg memoization |
| 23 | `23-generateQueryString.js` | URL query string parser & builder |
| 24 | `24-validateNestedSchema.js` | Object runtime schema validator |
| 25 | `25-nestedCategoryTree.js` | Flat-to-tree hierarchy converter |

---

### 🟠 Level 3 — Advanced (25 Questions)
Custom prototype methods, polyfills, deep operations, function composition, Promises, async execution, and event loop mechanics.

| # | File | Topic / Focus |
|---|------|---------------|
| 01 | `01-customMapFilterReduce.js` | Polyfilling map, filter, reduce |
| 02 | `02-customCallApplyBind.js` | Polyfilling call, apply, bind |
| 03 | `03-deepCloneRecursive.js` | Deep clone (Date, RegExp, Map, Set) |
| 04 | `04-deepEqualComparison.js` | Deep equality comparison |
| 05 | `05-pipeAndCompose.js` | Functional pipe and compose pipelines |
| 06 | `06-curryDynamic.js` | Dynamic arbitrary-arity currying |
| 07 | `07-advancedDebounceWithOptions.js` | Debounce with leading/trailing/cancel |
| 08 | `08-advancedThrottleWithOptions.js` | Throttle with leading/trailing/cancel |
| 09 | `09-customPromiseBasic.js` | Minimal custom Promise class |
| 10 | `10-customPromiseAll.js` | Promise.all polyfill |
| 11 | `11-customPromiseAllSettled.js` | Promise.allSettled polyfill |
| 12 | `12-customPromiseRaceAndAny.js` | Promise.race & Promise.any polyfills |
| 13 | `13-eventEmitter.js` | Custom EventEmitter pattern |
| 14 | `14-asyncRetryMechanism.js` | Async retry with exponential backoff |
| 15 | `15-promisifyUtility.js` | Error-first callback promisification |
| 16 | `16-eventLoopPrediction1.js` | Event loop prediction quiz (micro vs macro) |
| 17 | `17-eventLoopPrediction2.js` | Async/await execution order quiz |
| 18 | `18-flattenDeepAnyStructure.js` | Deep flatten arbitrary nested arrays |
| 19 | `19-memoizeWithCustomResolver.js` | Advanced memoize with custom key & TTL |
| 20 | `20-asyncSequenceExecution.js` | Waterfall sequential async execution |
| 21 | `21-asyncParallelExecution.js` | Custom async parallel runner |
| 22 | `22-circuitBreakerPattern.js` | Async Circuit Breaker state machine |
| 23 | `23-immutableUpdateHelper.js` | Immutable deep update utility |
| 24 | `24-methodChainingCalculator.js` | Fluent method chaining calculator |
| 25 | `25-customSetTimeoutInterval.js` | Custom setInterval via setTimeout |

---

### 🔴 Level 4 — Interview / Senior (30 Questions)
Realistic 3–5+ year JavaScript interview challenges: concurrency limits, custom engines, LRU cache, reactive proxies, and production-grade architectures.

| # | File | Topic / Focus |
|---|------|---------------|
| 01 | `01-promisePoolConcurrencyLimit.js` | Concurrency-limited Promise Pool |
| 02 | `02-lruCacheImplementation.js` | O(1) Least Recently Used Cache |
| 03 | `03-deepCloneCircularReferences.js` | Deep clone with circular references |
| 04 | `04-customAsyncAwaitEngine.js` | Generator coroutine async/await runner (`co`) |
| 05 | `05-rateLimiterTokenBucket.js` | Token Bucket rate limiter |
| 06 | `06-observableStreamBasic.js` | Reactive Observable stream with operators |
| 07 | `07-domVirtualNodeRendering.js` | Virtual DOM tree to HTML string renderer |
| 08 | `08-reactiveStateProxy.js` | Deep reactive store using ES6 Proxy |
| 09 | `09-autoRetryWithJitter.js` | Async retry with backoff & random jitter |
| 10 | `10-customJSONStringify.js` | Custom JSON.stringify implementation |
| 11 | `11-customJSONParse.js` | Recursive descent JSON parser |
| 12 | `12-eventLoopComplexQuiz.js` | Senior microtask/macrotask quiz |
| 13 | `13-promiseTimeoutAndCancel.js` | Promise timeout & AbortSignal cancellation |
| 14 | `14-batchAsyncRequestProcessor.js` | DataLoader batching queue |
| 15 | `15-nestedDataAggregationEngine.js` | Multi-level rollup aggregation engine |
| 16 | `16-middlewarePipelineKoaRedux.js` | Onion-model async middleware pipeline |
| 17 | `17-deepFreezeAndImmutability.js` | Recursive object deep freeze |
| 18 | `18-customSymbolIteratorRange.js` | Custom iterable Range & generator protocol |
| 19 | `19-dagTaskDependencyResolver.js` | DAG topological async task runner |
| 20 | `20-taskSchedulerPriorityQueue.js` | Priority async task scheduler |
| 21 | `21-customBindWithPolyfillCornerCases.js` | Full bind polyfill handling `new` |
| 22 | `22-pubSubWithWildcards.js` | Hierarchical wildcard Pub/Sub |
| 23 | `23-diffPatchObjects.js` | JSON Patch diff & apply engine |
| 24 | `24-curryWithPlaceholder.js` | Currying with Lodash `_` placeholder |
| 25 | `25-workerThreadPoolSimulation.js` | Async worker thread pool simulation |
| 26 | `26-asyncMemoizeCacheWithStaleWhileRevalidate.js` | Stale-While-Revalidate async cache |
| 27 | `27-flattenDeepObjectKeys.js` | Dot-notation flatten & unflatten |
| 28 | `28-customTemplateEngine.js` | Micro template engine with conditionals |
| 29 | `29-safeStringEvalFormula.js` | Math formula AST parser without eval |
| 30 | `30-memoryLeakFixAndDiagnostics.js` | Memory leak diagnosis & refactoring |

---

## 🎯 How to Practice

1. Navigate to any file (e.g. `level-1-beginner/01-reverseString.js`).
2. Read the problem description and requirements.
3. Write your implementation inside the function stub.
4. Run the file using Node.js to verify against the test cases:
   ```bash
   node level-1-beginner/01-reverseString.js
   ```
