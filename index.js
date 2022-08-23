// code your solution here
const rec = [{
year: "2015",
result: "l"},
{year: "2014",
result: "n/a"},
{year: "2013",
result: "l"},]
function superbowlWin(Array) {
const rec = Array.find(element => element.result === "W");
if (typeof rec === 'object') {
    return rec.year;
}
} 