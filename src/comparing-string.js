console.log("a".localeCompare("b", "pt-BR")); // -1
console.log("b".localeCompare("a", "pt-BR")); // 1
console.log("a".localeCompare("a", "pt-BR")); // 0

/** Return value
 * A negative number if referenceStr occurs before compareString;
 * positive if the referenceStr occurs after compareString; 0 if
 * they are equivalent.
 */

console.log("aa".localeCompare("ab", "pt-BR"));
console.log("2".localeCompare("10", undefined, { numeric: true }));
console.log("20".localeCompare("10", "pt-BR", { numeric: true }));

console.log("a" > "b");
