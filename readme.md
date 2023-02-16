(notes: under development)
### CLJ-JS
![image info](./clj-js.png)

Javascript Sets Functional Programming, Basic Clojure data structure   

#### Background 
#### Solving Problem 
#### Usage 
```sh
npm install clj-js
```
use 
```js

var {map, filter, thread, juxt, assocIn, updateIn} = require('clj-js');

```
#### Help Improve 
create issues, and Pull Request to improve or add current implementation 

#### Setup  development with node 

```sh
sudo docker run --rm -dit --name clj-js --network=host -v $(pwd):/work node:alpine /bin/sh
```
sudo docker attach clj-js && cd /work && node


**Plann Supported API**

```txt 
:Maps
assoc assoc_in dissoc merge merge_with select_keys update_in
key val
contains? get_in find keys vals get

:vectors
vector vec pop replace conj rseq mapv filterv reduce-kv peek
nth 

:list
first nth peek conj cons rest pop 

:coll 
map map-indexed mapcat for replace keep repeat range 

:strings
re-pattern re-find re-match replace
lower-case upper-case capitalize triml trimr char string? blank? includes?

:atoms 
swap reset add-watch atom

:basic
map map-indexed reduce for doseq
dotimes while
true? not= eq identical?
if-some
if if-not
when when-not
when-let
cond condp 

:functions
comp apply threadf threadl condl condp
somel somep
fn? constantly partial juxt fnil memoize
```

#### TODO
- Make all arguments arity check, check the length input arguments

