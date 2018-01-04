// This will show examples related with the Common Weakness Enumeration (CWE).

function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
    var arr = [1, 2, 3];
    if (x >= 1 ) {
        arr[x] = 3;
        arr[x-1] = 3;
    }
    
}
