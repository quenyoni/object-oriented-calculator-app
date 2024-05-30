
export default class Calculator {
    #calc:any[] = [];
    #answer;
    #primaryOp;
    #secondaryOp;
    constructor(primaryOp,secondaryOp)
    {
        
        this.#primaryOp = primaryOp
        this.#secondaryOp= secondaryOp



    
    }
    
    
    
    loadCalculator() {
        
       
       
        
    
        
    }
    _addNumbers(num) {
		if (this.#calc.length === 3) {
			this._clearAll();
		}
		if (
			num === "." &&
			this.#primaryOp.textContent === ""
		) {
			this.#primaryOp.textContent = "0.";
		} else if (
			this.#primaryOp.textContent === "0" ||
			num
		) {
			// this.#primaryOp.textContent = "";
			this.#primaryOp.textContent += num;
		}
    }
    _clearAll() {
		this.#secondaryOp.textContent = "";
		this.#primaryOp.textContent = "0";
		this.#calc = [];
    }
    
	_delete() {
		if (this.#calc.length === 3) {
			this._clearAll();
		}
		this.#primaryOp.textContent =
			this.#primaryOp.textContent.slice(0, -1);

		while (!this.#primaryOp.textContent.length) {
			this.#primaryOp.textContent = "0";
		}
	}

	operator(op) {
		// if numbers already exist

		if (this.#calc.length === 3) {
			this.#calc = [];
			this.#calc.push(this.#answer);
			this.#calc.push(op);
			console.log(this.#calc);
		} else {
			this.#calc.push(
				parseFloat(this.#primaryOp.textContent),
			);
			this.#calc.push(op);
		}

		//add the first number to the array

		this.#secondaryOp.textContent =
			this.#primaryOp.textContent;
		this.#primaryOp.textContent = 0;
	}

    getAnswer() {
        if(this.#calc.length ===3)return
		this.#calc.push(
			parseFloat(this.#primaryOp.textContent),
		);

		this.#secondaryOp.textContent = this.#calc.reduce(
			(sum, cur) => sum + " " + cur,
			"",
        );
        console.log(this.#calc);
        
		this.#answer = 0;

		if (this.#calc[1] === "+") {
			this.#answer =
				this.#calc[0] + this.#calc[2];
		} else if (this.#calc[1] === "-") {
			this.#answer =
				this.#calc[0] - this.#calc[2];
		} else if (this.#calc[1] === "x") {
			this.#answer =
				this.#calc[0] * this.#calc[2];
		} else if (this.#calc[1] === "/") {
			this.#answer =	this.#calc[0] / this.#calc[2];
			
			if (this.#calc[2] == 0) {
				this.#answer = "Error";
			}
			
		}
		this.#primaryOp.textContent = typeof (this.#answer) == 'number' ? this.toLocale(this.#answer):this.#answer
		;
	}

	toLocale(num) {
		return num.toLocaleString();
	}


    
    


}





