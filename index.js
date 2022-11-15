function vaporcode(string) {
    let arr = string.split('')
    let result = ''
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== ' ' && i !== arr.length - 1){
            result += arr[i].toUpperCase() + '  '
            console.log(result)
            
        } else if(arr[i] !== ' ' && i === arr.length - 1) {
          result += arr[i].toUpperCase()
        }

    }
  return result
  }


  vaporcode('Let get some bananas')

