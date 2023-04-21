var http=new XMLHttpRequest();

    http.open("get","https://restcountries.com/v3.1/all")
    http.send()

    http.responseType="json";

    http.onload=function (){
        var data=http.response;
        console.log(data);
        let result=data.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name)
        console.log(result);

        let result2=data.filter((ele1)=>ele1.population<200000)
        console.log(result2);

        let result3=data.reduce((acc,cv)=>acc+cv.population,0)
        console.log(result3);

    data.forEach(element => {
        console.log(`${element.name.common}:${element.capital}:${element.flags.svg}`)
        });
        
    }