import Button from './components/Button';
import './index.css';

class Index {
  hello(name) {
    return '안녕하세요 ' + name + '님!';
  }
}

const abc = new Index();
const btn = new Button();

console.log(btn);
console.log(abc.hello('김수호'));
