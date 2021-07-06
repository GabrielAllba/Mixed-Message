const zodQuote = {
    zodiac: [
        'Aquarius','Pisces','Aries',
        'Taurus','Gemini','Cancer',
        'Leo','Virgo','Libra',
        'Scorpio','Sagittarius','Capricorn'
    ],
    
    happiness: [10,20,30,40,50,60,5,7,8,9,12,15,25,35,44,28],
        
    mondayQuotes: [
        '“The purpose of our lives is to be happy.” — Dalai Lama',
        '“Life is what happens when you’re busy making other plans.” — John Lennon',
        '“Get busy living or get busy dying.” — Stephen King'
    ],
    weekendQuotes:[
        '“You only live once, but if you do it right, once is enough.” — Mae West',
        '“Many of life’s failures are people who did not realize how close they were to success when they gave up.” - Thomas A. Edison',
        '“If you want to live a happy life, tie it to a goal, not to people or things.”– Albert Einstein',
        '“Never let the fear of striking out keep you from playing the game.”– Babe Ruth'        
    ],
    
    tuesToFriQuotes:[
        '“Money and success don’t change people; they merely amplify what is already there.” — Will Smith',
        '“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” – Steve Jobs',
        '“Not how long, but how well you have lived is the main thing.” — Seneca',
        '“If life were predictable it would cease to be life, and be without flavor.” – Eleanor Roosevelt'
    ],
    
    activities:[
        'eat together with','marry',
        'be punched by','be kissed by',
        'watch a movie with', 'gardening with',
        'go swim with','go run with',
        'dancing with','kicked by',
        'gardening with'
    ],
    
    artist:[
        'Justin Bieber','Leonardo Da Vinci',
        'your dad','your mom','your grandfather',
        'your grandmother','Chris Hemsworth',
        'C. Ronaldo','Ariana Grande',
        'your friends','lion','komodo dragon',
        'tiger','bear'
    ],

    generateRandomNumber(number){
        //returning random number between 0 - number
        let createRandom = Math.floor(Math.random() * number)
        return createRandom;
    },
    
    generateData(arrs){
        //returning random value from properties
        const randIndex = this.generateRandomNumber(arrs.length)
        return arrs[randIndex];
    },
    
    //returning days numer into String "sunday", "monday",...
    generateDay(){
        const d = new Date();
        let listOfDay = new Array(7);
        listOfDay[0] = "Sunday";
        listOfDay[1] = "Monday";
        listOfDay[2] = "Tuesday";
        listOfDay[3] = "Wednesday";
        listOfDay[4] = "Thursday";
        listOfDay[5] = "Friday";
        listOfDay[6] = "Saturday";
        const currentDay = listOfDay[d.getDay()]
        return currentDay;
    },

    //returning month number into String "January","February",.....
    generateMonth(){
        const d = new Date();
        let listOfMonth = new Array(12);
        listOfMonth[0] = "January"
        listOfMonth[1] = "February"
        listOfMonth[2] = "March"
        listOfMonth[3] = "April"
        listOfMonth[4] = "May"
        listOfMonth[5] = "June"
        listOfMonth[6] = "July"
        listOfMonth[7] = "August"
        listOfMonth[8] = "September"
        listOfMonth[9] = "October"
        listOfMonth[10] = "November"
        listOfMonth[11] = "December"
        const currentMonth = listOfMonth[d.getMonth()]
        return currentMonth;
    },
    //printing day-date-month-year
    generateFullDate(){
        const d = new Date()
        console.log("Today is " + this.generateDay() + ", " + d.getDate() + " " + this.generateMonth() + " " + d.getFullYear());
    },

    //generating quotes based on what day's now
    generateQuotesFromDay(){
        let quotes = ''
        if(this.generateDay() == "Saturday" || this.generateDay() == "Sunday"){
            quotes = this.generateData(zodQuote.weekendQuotes);
        }
        else if(this.generateDay() == "Monday"){
            quotes = this.generateData(zodQuote.mondayQuotes)
        }
        else{
            quotes = this.generateData(zodQuote.tuesToFriQuotes)
        }
        console.log("Here is a quote for you: " + quotes)
    },
    
    dateOfBirth: '',

    printZodiacsMessage(){
        const zodiacs = this.generateData(zodQuote.zodiac);
        const happy = this.generateData(zodQuote.happiness);
        const activity = this.generateData(zodQuote.activities);
        const artists = this.generateData(zodQuote.artist);
        switch(zodiacs){
            case 'Aquarius':
                this.dateOfBirth = '20 january - 18 february'
                break;
            case 'Pisces':
                this.dateOfBirth = '19 february - 20 march'
                break;
            case 'Aries':
                this.dateOfBirth = '21 March - 19 April';
                break;
            case 'Taurus':
                this.dateOfBirth = '20 April - 20 May';
                break;
            case 'Gemini':
                this.dateOfBirth = '21 May - 20 June';
                break;
            case 'Cancer':
                this.dateOfBirth = '21 June - 22 July';
                break;        
            case 'Leo':
                this.dateOfBirth = '23 July - 22 August';
                break;
            case 'Virgo':
                this.dateOfBirth = '23 August - 22 September';
                break;
            case 'Libra':
                this.dateOfBirth = '23 September - 22 October';
                break;
            case 'Scorpio':
                this.dateOfBirth = '23 October - 21 November';
                break;
            case 'Sagittarius':
                this.dateOfBirth = '22 November - 21 December';
                break;
            case 'Capricorn':
                this.dateOfBirth = '22 December - 19 January';
                break;
        }
        console.log("Your zodiak is " + zodiacs + ". You were born between " + this.dateOfBirth + "." + " Your happiness is " + happy + "%.") 
        console.log("\n")
        console.log("Actually, today you will " + activity + ' ' + artists);
        
    }        
}

zodQuote.generateFullDate()
console.log("\n")
zodQuote.generateQuotesFromDay()
console.log("\n")
zodQuote.printZodiacsMessage();



