#include<stdio.h>
#include<math.h>
void main()
{
    float a, b, c, d;

    printf("Enter Coefficient a: ");
    scanf("%f", &a);
    printf("Enter Coefficient b: ");
    scanf("%f", &b);
    printf("Enter Coefficient c: ");
    scanf("%f", &c);

    d = pow(b, 2) - (4 * a * c);
    if (d > 0)
    {
        printf("%f\n", (-b + sqrt(d)) / (2 * a));
        printf("%f", (-b - sqrt(d)) / (2 * a));
    }
    else if (d == 0)
        printf("%f", -b / (2 * a));
    else
        printf("Complex Roots");
}