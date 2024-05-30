import './style.css'
import Calculator from './calculator';




const secondaryOp = document.querySelector(
  "[data-secondary-operand]",
);
const primaryOp = document.querySelector(
  "[data-primary-operand]",
);


const app = new Calculator(primaryOp,secondaryOp);






const btns = document.querySelectorAll("button");


btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		if (e.target.matches("[data-all-clear]")) {
			app._clearAll();
		}
		if (e.target.matches("[data-delete]")) {
			app._delete();
		}

		if (e.target.matches("[data-number]")) {
			// app._addNumbers(e.target.textContent);
     app._addNumbers(e.target.textContent);
    
		}

		if (e.target.matches("[data-operation]")) {
			app.operator(e.target.textContent);
		}

		if (e.target.matches("[data-equals]")) {
			app.getAnswer();
		}
	});
});




