#include<iostream.h>
#include<conio.h>

void main()
{
clrscr();
cout<<"Displaying Screen:\n";
for(int i=1;i<=9;i++)
{
for(int j=1;j<=i;j++)
{
cout<<" ";
cout<<j;
}
cout<<endl;
}
getch();}