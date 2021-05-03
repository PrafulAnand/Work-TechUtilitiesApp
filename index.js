const readLineSync = require('readline-sync');
const crypto = require('crypto');

const printOptions = () => {
  console.log("Welcome to Work@Tech Utilities App\nSelect an option num from below to use the utilities.");
  console.log('1. URL Encoder/Decoder');
  console.log('2. Base64 Encoder/Decoder');
  console.log('3. Perform String Hashing');
  console.log('4. Epoch Converter');
  console.log('5. Number base Converter');
  console.log('6. RGB HEX Converter');
  console.log('7. Temperature Converter');
  console.log('8. Exit');
}
const options = option => {
  switch(option){
   case 1:
      urlHandler();
      break;
    case 2:
      base64EncodingDecoding();
      break;
    case 3:
      hashConverter();
      break;
    case 4:
      epochHandler();
      break;
    case 5:
      numberHandler();
      break;
    case 6:
      rgbHexHandler();
      break;
    case 7:
      temperatureHandler();
      break;
    default:
      console.log('Please enter a valid option');
  }
}

  const urlHandler = () => {
    url = readLineSync.question('Enter URL to encode and decode?\n');
    const encoded_url = encodeURIComponent(url);
    const decoded_url = decodeURIComponent(encoded_url);
    console.log(`Encoded Url - ${encoded_url}`);
    console.log(`Decoded Url - ${decoded_url}`);
}

const base64EncodingDecoding = () => {
   data = readLineSync.question('Enter data to use base64 encoder/decoder?\n')
const base64_convertedData = Buffer.from(data).toString('base64');

console.log(`Base64 convertedData - ${base64_convertedData}`);
const original = Buffer.from(base64_convertedData, 'base64').toString('ascii');

console.log(original);
}

const hashConverter = () => {
  const hashalgos = ["md5", "sha1", "sha256", "sha512"];
  const data = readLineSync.question('Enter String to apply hashing algorithm md5, sha1, sha256, sha512\n');
  const hashAlgo = readLineSync.question('Enter hashing type[md5, sha1, sha256, sha512]?\n');
  if(hashalgos.indexOf(hashAlgo) !== -1){
    const hash = crypto.createHash(hashAlgo).update(data).digest('hex');
    console.log(`${hashAlgo} applied on ${data}. Hashed data-> ${hash}`);
  }
  else{
    console.log(`Enter a valid hashing algo!`);
  }
}

const epochConverter = toDate => {
  const ans = {
    year: toDate.getFullYear(),
    month: toDate.getMonth(),
    date: toDate.getDate(),
    hours: toDate.getHours(),
    minutes: toDate.getMinutes(),
    seconds: toDate.getSeconds()
  }
  return ans;
}

const epochHandler = () => {
  const year = Number(readLineSync.question('Enter the year?\n'))
  const month = Number(readLineSync.question('Enter the month?\n'));
  const date = Number(readLineSync.question('Enter the date?\n'));
  const hours = Number(readLineSync.question('Enter hour?\n'));
  const minutes = Number(readLineSync.question('Enter minute?\n'));
  const seconds = Number(readLineSync.question('Enter seconds?\n'));

  const fullDate = new Date(year, month, date, hours, minutes, seconds);
  const epoch = fullDate.getTime();

  //Converts epoch to Date{year, month, date, hours, minutes, seconds}
  const toDate = new Date(epoch);
  const ans = JSON.stringify(epochConverter(toDate));

  console.log(`\ttoEpoch(${year}, ${month}, ${date}, ${hours}, ${minutes}, ${seconds}) -> ${epoch}`);

  console.log(`\ttoHumanDate(${epoch}) -> ${ans}`);
}


const main = () =>{
  printOptions();
const choice = Number(readLineSync.question('Enter an option?\n'));
options(choice);
}
main();
