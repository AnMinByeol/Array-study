// 1. 배열을 string으로 변환해봐
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(result);
}

// 2. 배열로 만들기
{
  const fruits = "apple, banana, orange";
  const result = fruits.split(",");
  console.log(result);
}

// 3. 배열을 거꾸로 만들기
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// 4. 주어진 배열에서 2번째부터 4번째까지 숫자를 포함한 새로운 배열을 만들자
// split = 배열 자체를 수정
// slice = 배열에서 원하는 부분만 받아오고 싶을때
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); //2부터 시작해서 4번째+1까지
  console.log(result);
}

// 5. 90점 이상인 학생들을 찾아줘
// 배열에서의 위치를 가리키는 숫자를 인덱스(index)라고 한다.
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// 6. 학생들 중에서 수업에 등록한 학생만 배열로 만들어줘
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// 7. 점수만 있는 새로운 배열을 만들어봐
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// 8. 점수가 50점보다 낮은 학생이 있는지 없는지
{
  // 한개라도 조건의 충족된다면 true
  const result = students.some((student) => student.score < 50);
  console.log(result);
  // 모두 조건의 충족된다면 true
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// 9. 평균점수를 구해봐
// prev=리턴 값, curr=배열의 value 값
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// 10. 점수가 50점 이상인 아이들을 String으로 변환하기
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score > 50)
    .join();
  console.log(result);
}

// 낮은 점수로 정렬한 후 string으로 변환하기
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
