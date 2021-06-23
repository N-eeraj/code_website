codeObj = {
            'js': `console.log("hello world");`,
            'py': `print("hello world")`,
            'c': `#include<stdio.h>\nvoid main()\n{\n  printf("hello world");\n}`,
            'cpp': `#include<iostream>\nusing namespace std;\nint main()\n{\n  cout << "hello world";\n  return 0;\n}`,
            'java': `class Main\n{\n  public static void main(String[] args)\n  {\n    System.out.println("hello world");\n  }\n}`
        }

function changeCode(lang)
{
    terminal.innerText = codeObj[lang];
}