#include<iostream.h>
#include<conio.h>

 class pat
  {
 public:
 int a, b, sum;
 void get()
 {
 cin>>a>>b;
 sum=a+b;
 cout<<a<<"+"<<b<<"="<<sum<<"\n";
 }
 };

 class fat : public pat
 {
 public:
 int sqa, sqb;
 void set()
 {
 sqa= a*a;
 sqb= b*b;
 sum = sqa+sqb;
 cout<<sqa<<"+"<<sqb<<"="<<sum<<"\n";
 }
 };

 void main()
 {
 clrscr();
 fat f;
 f.set();
 f.set();
 getch();
 }










