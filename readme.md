# Count_down Timer

## this is how my project look like
![image](img/../Screenshot%20(426).png "CSS_reflection") 

### Here i only use some basic javaScript function
i.e
```webkit
    function countdown() {
    const exam_date = new Date(examDate);
    const currentDate =  new Date();

    const totalSeconds = (exam_date - currentDate)/1000;
    
    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayE1.innerHTML =days;
    hoursE1.innerHTML =formatTime(hours);
    minsE1.innerHTML =formatTime(mins);
    secondsE1.innerHTML =formatTime(seconds);

}
```

## Click here to visit  [https://count-down-timer.pages.dev/](https://count-down-timer.pages.dev/ "https://count-down-timer.pages.dev/")
