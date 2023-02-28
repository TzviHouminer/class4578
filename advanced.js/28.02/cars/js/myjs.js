/* mission1
const myName = "tzvi houminer";

String.prototype.start = function() {
    const starsRow = "*".repeat(4 + this.length);
    const result = `${starsRow}\n* ${this} *\n${starsRow}`;
    return result;
};
console.log(myName.start());
*/

/* mission2
const stringList = "jony bodha jordan ami harry";

String.prototype.last = function(){
    const list = this.split(' ');
    return list[list.length-1];
};
console.log(stringList.last());
*/

/*mission3
const str = "example";
String.prototype.spaced = function() {
    var newStr = ""
    for(index=0 ;index<this.length; index++){
        newStr += this[index] + ' ';
    }
    return newStr;
};
console.log(str.spaced());

const str = "example";
String.prototype.spaced = function() {
    return this.split('').join(' ');
};
console.log(str.spaced());
*/

const str = "coco melon";

String.prototype.reverseMe = function(){
    newStr = ""
    for(index=this.length-1; index>=0; index--){
        newStr += this[index];
    }
    return newStr;
}
console.log(str.reverseMe());