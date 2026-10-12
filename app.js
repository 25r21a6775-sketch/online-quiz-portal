const subjects = [
 {name:"Software Engineering",icon:"🧩",desc:"Development processes, testing and design",questions:{
 Easy:[
 ["What is the main goal of software engineering?",["To build reliable software systematically","To avoid all documentation","To use only one programming language","To remove software testing"],0],
 ["Which model follows a sequence of phases?",["Spiral model","Waterfall model","Agile sprint only","Prototype-only model"],1],
 ["What does SDLC stand for?",["Software Design Level Code","System Data Link Control","Software Development Life Cycle","Standard Development Logic Chart"],2],
 ["Which activity finds defects in software?",["Testing","Deployment","Budgeting","Recruitment"],0],
 ["Who gathers and clarifies user needs?",["Compiler","End user only","Network router","System analyst"],3]],
 Medium:[
 ["Which document commonly describes functional requirements?",["Test log","Software Requirements Specification","Source executable","Deployment receipt"],1],
 ["What is regression testing?",["Testing only new users","Checking old features after changes","Removing old test cases","Measuring team attendance"],1],
 ["Which approach delivers software in repeated short cycles?",["Big-bang only","Waterfall only","Agile","Code-and-forget"],2],
 ["What is a use-case diagram mainly used to show?",["Disk layout","Actors and system interactions","Source-code syntax","Network bandwidth"],1],
 ["Which is a non-functional requirement?",["User can reset password","System calculates tax","Page opens in under two seconds","User can create a record"],2]],
 Hard:[
 ["In risk management, risk exposure is commonly estimated as:",["Probability × impact","Cost + schedule","Lines of code × users","Testing time − coding time"],0],
 ["Which design principle aims to keep modules focused on one responsibility?",["High coupling","Low cohesion","Single responsibility","Global state"],2],
 ["Mutation testing evaluates test quality by:",["Changing requirements randomly","Introducing small code changes and checking whether tests detect them","Deleting all tests","Measuring compile speed"],1]]
 }},
 {name:"Computer Organisation and Architecture",icon:"💻",desc:"CPU, memory, instructions and digital systems",questions:{
 Easy:[
 ["Which component performs arithmetic and logic operations?",["ALU","Control bus","RAM slot","Monitor"],0],
 ["Which memory is volatile?",["ROM","RAM","SSD","Blu-ray"],1],
 ["What does CPU stand for?",["Central Processing Unit","Computer Program Utility","Control Power Unit","Core Peripheral User"],0],
 ["Which number system uses base 2?",["Decimal","Octal","Binary","Hexadecimal"],2],
 ["Which unit stores one bit?",["Flip-flop","Printer","Compiler","Cache line only"],0]],
 Medium:[
 ["What is the purpose of a cache?",["Permanent archiving","Reduce average memory access time","Replace all registers","Translate source code"],1],
 ["Which register normally holds the address of the next instruction?",["Accumulator","Instruction register","Program counter","Status register"],2],
 ["In two's complement, negation is performed by:",["Shift only","Invert bits and add one","Add two without inversion","Remove the sign bit"],1],
 ["What does pipelining improve primarily?",["Instruction throughput","Disk capacity","Program readability","RAM volatility"],0],
 ["Which bus carries memory addresses?",["Data bus","Control bus only","Address bus","Power bus"],2]],
 Hard:[
 ["A direct-mapped cache block has exactly how many possible cache locations?",["One","Two","Four","Any location"],0],
 ["For an ideal pipeline with k stages and many instructions, maximum speedup approaches:",["1/k","k","k squared","Zero"],1],
 ["DMA allows data transfer with reduced involvement of the:",["CPU","Secondary storage","I/O device","Memory bus"],0]]
 }},
 {name:"Mathematical Statistics Foundation",icon:"📊",desc:"Probability, distributions and statistical measures",questions:{
 Easy:[
 ["What is the mean of 2, 4 and 6?",["3","4","5","6"],1],
 ["A probability value lies between:",["−1 and 1","0 and 100 only","0 and 1 inclusive","1 and 10"],2],
 ["What is the median of 1, 3, 9?",["1","3","4","9"],1],
 ["A fair coin is tossed once. Probability of heads is:",["1/4","1/2","1","0"],1],
 ["Which measure describes the most frequent value?",["Mean","Range","Mode","Variance"],2]],
 Medium:[
 ["If events A and B are independent, P(A∩B) equals:",["P(A)+P(B)","P(A)P(B)","P(A)/P(B) always","1−P(A)"],1],
 ["Standard deviation is the square root of:",["Mean","Median","Variance","Range"],2],
 ["For a normal distribution, mean, median and mode are:",["Equal","Always zero","All different","Undefined"],0],
 ["If P(A)=0.3, then P(not A) is:",["0.3","0.7","1.3","0"],1],
 ["The range of a data set is:",["Maximum minus minimum","Mean divided by count","Sum of observations","Median minus mode"],0]],
 Hard:[
 ["For a binomial variable, variance is:",["np","np(1−p)","n+p","p/n"],1],
 ["If covariance of X and Y is zero, they are necessarily:",["Independent in all cases","Perfectly correlated","Uncorrelated, but not necessarily independent","Identical"],2],
 ["The central limit theorem describes the approximate distribution of suitably standardized:",["Sample means for large samples","Every raw observation","Only medians","Only uniform variables"],0]]
 }},
 {name:"OOPs Through Java",icon:"☕",desc:"Classes, inheritance, interfaces and exceptions",questions:{
 Easy:[
 ["Which keyword defines a class in Java?",["object","class","define","struct"],1],
 ["Which method is the usual Java program entry point?",["start()","run()","main()","init()"],2],
 ["Which keyword creates an object?",["new","make","this","class"],0],
 ["Which concept allows a class to inherit another class?",["Encapsulation","Inheritance","Compilation","Casting"],1],
 ["Which type stores true or false?",["int","char","boolean","double"],2]],
 Medium:[
 ["Method overloading is determined by a different:",["Return type alone","Method name alone","Parameter list","Access modifier alone"],2],
 ["Which keyword refers to the current object?",["super","this","static","final"],1],
 ["Which block usually executes whether or not an exception occurs?",["try","catch","throw","finally"],3],
 ["A Java class can directly extend how many classes?",["One","Two","Unlimited","Zero only"],0],
 ["Which keyword prevents a method from being overridden?",["abstract","extends","final","implements"],2]],
 Hard:[
 ["Which statement about interfaces in modern Java is correct?",["They cannot contain any implemented methods","They can contain default and static methods","They must be instantiated directly","They cannot be implemented by classes"],1],
 ["Which principle hides internal state and controls access through methods?",["Encapsulation","Recursion","Overloading","Aggregation only"],0],
 ["What happens when an unchecked exception is not caught?",["It is always ignored","The current thread may terminate with an exception","Compilation always fails","It converts to null"],1]]
 }},
 {name:"Database Management System",icon:"🗄️",desc:"SQL, relational models, keys and transactions",questions:{
 Easy:[
 ["What does SQL stand for?",["Structured Query Language","Simple Question Logic","System Queue Link","Sequential Quick List"],0],
 ["Which command retrieves rows from a table?",["INSERT","UPDATE","SELECT","DROP"],2],
 ["A primary key must be:",["Unique and non-null","Always text","Allowed to repeat","Always a foreign key"],0],
 ["Which command adds a new row?",["ALTER","INSERT","SELECT","GRANT"],1],
 ["Which clause filters rows by a condition?",["ORDER BY","GROUP BY","WHERE","FROM only"],2]],
 Medium:[
 ["What is the purpose of a foreign key?",["Encrypt a table","Link rows between tables","Sort every row","Create duplicate primary keys"],1],
 ["Which normal form removes partial dependency on a composite key?",["1NF","2NF","3NF","4NF"],1],
 ["Which ACID property means all-or-nothing execution?",["Consistency","Isolation","Durability","Atomicity"],3],
 ["Which join returns matching rows from both tables?",["INNER JOIN","CROSS JOIN","FULL JOIN always","SELF JOIN only"],0],
 ["Which SQL clause groups rows for aggregate calculations?",["WHERE","ORDER BY","GROUP BY","LIMIT"],2]],
 Hard:[
 ["A schedule is conflict-serializable if its precedence graph is:",["Cyclic","Acyclic","Disconnected only","Complete"],1],
 ["Which dependency violates BCNF when X is not a superkey?",["Trivial dependency only","Non-trivial functional dependency","No dependency","Primary-key equality"],1],
 ["A dirty read occurs when a transaction reads:",["Committed data only","Its own inserted row only","Uncommitted data from another transaction","A schema definition"],2]]
 }}
];
const icons = subjects.map(s=>s.icon);
const $ = id => document.getElementById(id);
let mode="login", currentUser=null, selectedSubject=null, selectedLevel=null, quizQuestions=[], answers=[], questionIndex=0, lastSession=null;
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function write(key,value){localStorage.setItem(key,JSON.stringify(value))}
function show(id){["authView","dashboardView","difficultyView","quizView","resultView"].forEach(x=>$(x).classList.toggle("hidden",x!==id))}
function setMode(next){mode=next; $("loginTab").classList.toggle("active",mode==="login");$("registerTab").classList.toggle("active",mode==="register");$("authTitle").textContent=mode==="login"?"Welcome back":"Create your account";$("authDescription").textContent=mode==="login"?"Sign in to continue to your dashboard.":"A few details and you are ready to practice.";["nameLabel","rollLabel","confirmLabel"].forEach(id=>$(id).classList.toggle("hidden",mode!=="register"));$("authSubmit").innerHTML=mode==="login"?'Sign in <span>→</span>':'Create account <span>→</span>';$("authMessage").textContent=""}
$("loginTab").onclick=()=>setMode("login");$("registerTab").onclick=()=>setMode("register");
async function hash(text){const bytes=new TextEncoder().encode(text);const digest=await crypto.subtle.digest("SHA-256",bytes);return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,"0")).join("")}
$("authForm").addEventListener("submit",async e=>{e.preventDefault();const username=$("username").value.trim().toLowerCase(),password=$("password").value,users=read("quizportal_users",{});if(!username||password.length<4){$("authMessage").textContent="Enter a username and a password of at least 4 characters.";return}
if(mode==="register"){const name=$("fullName").value.trim(),roll=$("rollNumber").value.trim();if(!name||!roll){$("authMessage").textContent="Please enter your full name and roll number.";return}if(password!==$("confirmPassword").value){$("authMessage").textContent="Passwords do not match.";return}if(users[username]){$("authMessage").textContent="That username already exists. Please sign in.";return}users[username]={name,roll,passwordHash:await hash(password)};write("quizportal_users",users);currentUser=username;openDashboard();return}
if(!users[username]||users[username].passwordHash!==await hash(password)){$("authMessage").textContent="Username or password is incorrect.";return}currentUser=username;openDashboard()});
$("logoutButton").onclick=()=>{currentUser=null;$("headerUser").textContent="";$("authForm").reset();setMode("login");show("authView")};
function openDashboard(){const user=read("quizportal_users",{})[currentUser];$("headerUser").textContent="Signed in as "+user.name;$("studentName").textContent=user.name.split(" ")[0];show("dashboardView");renderSubjects();renderHistory()}
function renderSubjects(){$("subjectGrid").innerHTML=subjects.map((s,i)=>`<button class="subject-card" data-index="${i}"><span class="subject-icon">${s.icon}</span><h3>${s.name}</h3><p>${s.desc}</p><div class="card-bottom"><span>3 difficulty levels</span><span>Start →</span></div></button>`).join("");document.querySelectorAll(".subject-card").forEach(b=>b.onclick=()=>{selectedSubject=subjects[+b.dataset.index];$("chosenSubject").textContent=selectedSubject.name;show("difficultyView")})}
document.querySelectorAll(".difficulty").forEach(b=>b.onclick=()=>startQuiz(b.dataset.level));
$("backDashboard").onclick=()=>show("dashboardView");
function startQuiz(level){selectedLevel=level;const list=selectedSubject.questions[level];quizQuestions=[...list].sort(()=>Math.random()-.5);answers=Array(quizQuestions.length).fill(null);questionIndex=0;$("quizMeta").textContent=selectedSubject.name+" · "+level;show("quizView");renderQuestion()}
function renderQuestion(){const q=quizQuestions[questionIndex];$("questionCount").textContent=`QUESTION ${questionIndex+1} OF ${quizQuestions.length}`;$("answeredCount").textContent=`${answers.filter(a=>a!==null).length} answered`;$("questionText").textContent=q[0];$("options").innerHTML=q[1].map((o,i)=>`<button class="option ${answers[questionIndex]===i?"selected":""}" data-option="${i}"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${o}</span></button>`).join("");document.querySelectorAll(".option").forEach(b=>b.onclick=()=>{answers[questionIndex]=+b.dataset.option;renderQuestion()});$("progressFill").style.width=((questionIndex+1)/quizQuestions.length*100)+"%";$("previousQuestion").disabled=questionIndex===0;$("nextQuestion").classList.toggle("hidden",questionIndex===quizQuestions.length-1);$("submitQuiz").classList.toggle("hidden",questionIndex!==quizQuestions.length-1);$("submitQuiz").textContent="Submit quiz ✓"}
$("previousQuestion").onclick=()=>{if(questionIndex>0){questionIndex--;renderQuestion()}};$("nextQuestion").onclick=()=>{if(questionIndex<quizQuestions.length-1){questionIndex++;renderQuestion()}};$("exitQuiz").onclick=()=>{if(confirm("Exit this quiz? Your current answers will not be saved."))show("difficultyView")};$("submitQuiz").onclick=()=>{const blank=answers.filter(a=>a===null).length;if(blank&& !confirm(`${blank} question(s) are unanswered. Submit anyway?`))return;finishQuiz()};
function finishQuiz(){const correct=answers.filter((a,i)=>a===quizQuestions[i][2]).length,wrong=answers.filter((a,i)=>a!==null&&a!==quizQuestions[i][2]).length,unanswered=answers.filter(a=>a===null).length,percent=Math.round(correct/quizQuestions.length*100);lastSession={subject:selectedSubject.name,level:selectedLevel,questions:quizQuestions,answers,correct,wrong,unanswered,percent,date:new Date().toLocaleString()};const history=read("quizportal_history",{});history[currentUser]=[lastSession,...(history[currentUser]||[])].slice(0,8);write("quizportal_history",history);$("resultSubtitle").textContent=`${selectedSubject.name} · ${selectedLevel} level`;$("scorePercent").textContent=percent+"%";$("scoreTitle").textContent=percent>=80?"Excellent work!":percent>=50?"Good effort!":"Keep practising!";$("scoreText").textContent=`You answered ${correct} out of ${quizQuestions.length} questions correctly.`;$("correctCount").textContent=correct;$("wrongCount").textContent=wrong;$("unansweredCount").textContent=unanswered;$("reviewList").innerHTML=quizQuestions.map((q,i)=>{const ok=answers[i]===q[2];return `<article class="review-item ${ok?"correct":"incorrect"}"><h3>${i+1}. ${q[0]}</h3><p class="${ok?"answer-good":"answer-bad"}">Your answer: ${answers[i]===null?"Not answered":q[1][answers[i]]}</p><p class="answer-good">Correct answer: ${q[1][q[2]]}</p></article>`}).join("");show("resultView")}
$("retryQuiz").onclick=()=>startQuiz(selectedLevel);$("resultDashboard").onclick=()=>openDashboard();
function renderHistory(){const h=read("quizportal_history",{})[currentUser]||[];$("history").innerHTML=h.length?h.map(x=>`<div class="history-row"><span><b>${x.subject}</b><br><span class="muted">${x.level} · ${x.date}</span></span><b>${x.percent}%</b></div>`).join(""):'<p class="empty-history">No quizzes completed yet. Choose a subject above to start your first practice session.</p>'}
