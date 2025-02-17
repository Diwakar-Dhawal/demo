
import jsonfile from 'jsonfile';
import moment from 'moment';
const FILE_PATH= './data.json';
import random from 'random';
import simpleGit from 'simple-git';
const makeCommit=n=>{
if(n===0) return simpleGit().push();
const x = random.int(0,54);
const y = random.int(0,6);
const DATE = moment().subtract(1,'y').add(1,'d')
                                        .add(x,'w').add(y,'d').format();
const data = {
    date: DATE
}
console.log(DATE);
jsonfile.writeFile(FILE_PATH, data,()=>{
    simpleGit().add([FILE_PATH]).commit(DATE,{'--date': DATE}, makeCommit.bind(this, --n));
});
}
makeCommit(100)