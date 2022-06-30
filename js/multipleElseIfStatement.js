let student = {
    id : "001",
    name: "Oladele",
    score: 101,
    point : null
};

if (student.score >= 0 && student.score <= 39){
    student.point = "0pts";

    console.log(`Please try again your score is  ${student.score} and your point is ${student.point}`);
}
else if (student.score >= 40 && student.score <=44){
    student.point = "1pts";
    
    console.log(`Please try again your score is  ${student.score} and your point is ${student.point}`);
}
else if (student.score >= 45 && student.score <= 49){
    student.point = "2pts";

    console.log(`Please try again your score is  ${student.score} and your point is ${student.point}`);
}
else if (student.score >= 50 && student.score <= 59){
    student.point = "3pts";

    console.log(`Please try again your score is  ${student.score} and your point is ${student.point}`);
}
else if (student.score >= 60 && student.score <= 75) {
    student.point = "4pts";

    console.log(`Please try again your score is  ${student.score} and your point is ${student.point}`);
}
else if (student.score >= 71 && student.score <= 100) {
    student.point = "5pts";

    console.log(`Please try again your score is  ${student.score} and your point is ${student.point}`);
}
else {
    console.log(`Invalid score is ${student.score}`);
}
