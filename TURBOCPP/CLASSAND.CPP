#include<iostream.h>
#include<conio.h>

class demo {
private:
int a, b;
public:
void input(){
cout<<"enter values: ";
cin>>a>>b;
}
void show(){
cout<<a<<" "<<b<<endl;
}
};
void main(){
clrscr();
demo ab,ab1 ;
ab.input();
ab1.input();
ab.show();
ab1.show();
ab.show();
getch();
 }
