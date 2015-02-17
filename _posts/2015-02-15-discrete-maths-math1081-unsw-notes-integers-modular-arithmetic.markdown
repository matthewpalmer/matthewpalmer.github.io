---
layout: note
title: "Discrete Maths (MATH1081): Section 2 — Integers, Modular Arithmetic, and Relations"
categories: discrete
---

## Factors

If *a* is a factor of *b*, we also say:

- *b* is a multiple of *a*
- *a* is a divisor of *b*
- *a* divides *b*
- *b* is divisible by *a*

### Properties of divisibility
* if _a_ | _b_ and _a_ | _c_ then _a_ | _b_ + _c_ and _a_ | _b_ – _c_
* if _a_ | _b_ and _a_ | _c_ then _a_ | _sb_ + _tc_
* if _a_ | _b_ and _b_ | _c_ then _a_ | _c_

### Prime numbers
If _p_ is prime, and _p_ = _ab_, then either _a_ = 1 or _b_ = 1.

### Fundamental theorem of arithmetic
A composite positive integer can be factorised as a product primes. Further, a given integer has only one such factorisation.

e.g. 14175 = 3<sup>4</sup> × 5<sup>2</sup> × 7

### Testing for primes
Three ways of expressing the same idea

* If _n_ is composite, then _n_ has a factor c such that 1 < c ≤ sqrt(n)
* Any composite number _n_ has a prime factor ≤ sqrt(_n_)
* Let _n_ be a positive integer greater than 1. If _n_ has no prime factor ≤ sqrt(_n_), then _n_ is prime.

### Greatest common divisor
Let _a_, _b_ ∈ ℤ. Any integer _d_ such that _d_ | _a_ and _d_ | _b_ is called a *common divisor* or *common factor* of _a_ and _b_.
The largest _d_ is the greatest common divisor, written as gcd(_a_, _b_)

### Least common multiple
Any _m_ > 0 such that _a_ | _m_ and _b_ | _m_ is a *common multiple* of _a_ and _b_. The smallest common multiple is written lcm(_a_, _b_)

### Coprime, relatively prime
If the gcd of _a_ and _b_ is 1 then we say that _a_ and _b_ are *coprime* or *relatively prime*.

### Applying fundamental theorem of arithmetic
To find the *gcd* of two numbers 14175 and 16758, we multiply all of the common prime factors of both.

14175 = **3<sup>4</sup>** × 5<sup>2</sup> × **7**

16758 = 2 × **3<sup>2</sup>** × **7<sup>2</sup>** × 19

gcd(14175, 16758) = 3<sup>2</sup> × 7

To find the *lcm* of two numbers 14175 and 16758 we need the smallest product
of prime factors that include everything in both numbers.

e.g. lcm(14175, 16758) = 2 × 3<sup>4</sup> × 5<sup>2</sup> × 7<sup>2</sup> × 19
= 3770550

* if _a_, _b_ > 0 then gcd(_a_, _b_) × lcm(_a_, _b_) = _ab_

### The Euclidean algorithm
Let _a_ and _b_ be positive integers. Suppose that 

a = q<sub>1</sub>b + r<sub>1</sub>

b = q<sub>2</sub>r<sub>1</sub> + r<sub>2</sub>

r<sub>1</sub> = q<sub>3</sub>r<sub>2</sub> + r<sub>3</sub>

…

r<sub>n – 2</sub> = q<sub>n</sub>r<sub>n – 1</sub> + r<sub>n</sub>

r<sub>n – 1</sub> = q<sub>n + 1</sub>r<sub>n</sub>

Then gcd(a, b) = r<sub>n</sub>

* Note the down and to the left movement of each part.
* r<sub>n</sub> is the last non-zero remainder.

e.g. Find the gcd of 854 and 651.

854 = 1 × 651 + 203

651 = 3 × 203 + 42

203 = 4 × 42 + 35

 42 = 1 × 35 + 7
 
 35 = 5 × 7
 
 So gcd(854, 651) = 7
 
### Solving equations like ax + by = c (Bezout property)
 
 Consider ax + by = c
 
 * if _c_ = gcd(_a_, _b_) then it has a solution
 * if _c_ is a multiple of gcd(_a_, _b_) then it has multiple solutions
 * if _c_ is not a multiple of gcd(_a_, _b_) then there are no solutions
 
 e.g. Find a solution for 30_x_ + 73_y_ = 1
 
Compute gcd(73, 30)

73 = 2 × 30 + 13
30 = 2 × 13 + 4
13 = 3 × 4 + 1

so 1 is the gcd.

Reversing this,

1 = 13 – 12

  = 13 – (3 × 4)
  
  = 13 – 3 × (4)
  
  = 13 – 3 × (30 – 2 × 13)
  
  = 13 - 3 × 30 + 6 × 13
  
  = –3 × 30 + 7 × 13
  
  = –3 × 30 + 7 × (73 – 2 × 30)
  
  = –3 × 30 + 7 × 73 - 14 × 30
  
  = –17 × 30 + 7 × 73

Therefore x = –17, y = 7

### Modulo
If _m_ | _a_ – _b_, then _a_ and _b_ are *congruent modulo* _m_

a ≅ b mod(m)

which can also be written as

* m | a – b
* a = b + km, k ∈ ℤ
* a and b have the same remainder when divided by m

#### Properties
If a ≅ b(mod m) and c ≅ d(mod m) (i.e. they have the same mods)

* a + c ≅ b + d(mod m)
* a – c ≅ b – d(mod m)
* ac ≅ bd(mod m)
* ca ≅ cb (mod m)
* a<sup>n</sup> ≅ b<sup>n</sup>(mod m)
* if a ≅ b(mod m) and n | m then a ≅ b(mod n)

### Simplifying modulo

e.g. Simplify 10<sup>123456789</sup> modulo 41

1. Start by trying things out, we want to find a 1.
   10<sup>2</sup> = 100 ≅ 18(mod 41)
   
   10<sup>3</sup> ≅ 180 ≅ 16(mod 41)
   
   10<sup>4</sup> ≅ 160 ≅ –4(mod 41)
   
   10<sup>5</sup> ≅ -40 ≅ 1(mod 41)

2. Now that we have a 1, try to rewrite the equation to use that to simplify

10<sup>123456789</sup> = 10<sup>123456785</sup> × 10<sup>4</sup>

≅ 10<sup>5q + 4</sup>
≅ 10<sup>5q</sup> + 10<sup>4</sup> (mod 41)
≅ 1<sup>q</sup> × (–4) (mod 41)
≅ –4(mod 41)
≅ 37(mod 41)

### Solving congruence
We can use congruences to solve equations and vice versa.

79x ≅ 5347(mod 45) is the same as 79x – 45y = 5347

Then we apply the same steps as above.

1. Apply the Euclidean algorithm
2. Reverse the process to obtain a Bezout identity
3. Determine the solution(s)

**Number of solutions**

Consider ax ≅ b(mod m)

* if a and m are coprime then the congruence has a unique solution
* if gcd(a, m) isn't a factor of b then there is no solution
* if gcd(a, m) is a factor of b then the congruence has a unique solution mod m
* if g = gcd(a, m) is a factor of b then the congruence has g different solutions mod m

## Relations
See course notes for introduction, definitions.

### Reflexive
> A relation is reflexive if for every a ∈ A it is true that a R a

i.e. if every element is related to itself.

**How to prove**

"Let x ∈ S. Then … and thus x ~ x"

### Symmetric
> A relation is symmetric when for all a, b in A, if a R b then b R a

i.e. if a R b then b R a.

**How to prove**

It's an "if then" proof, so we start by assuming that it is true (a R b), and then prove
that b R a.

"Let x, y ∈ ℝ and assume x ~ y … " then prove y ~ x

### Transitive
> R is transitive if a R b and b R a then a R c

i.e. if a is related to b, and b is related to c, then a is related to c.

**How to prove**

Also an "if then" proof, this time involving three variables.

"Let x, y, z ∈ ℝ and assume x ~ y and y ~ z then …"

### Antisymmetric
> R is antisymmetric if a R b and b R a then a = b

i.e. two different elements of A may be related by R one way around, or the other,
or neither, but not both.

**How to prove**

As above, an "if then" proof

### Equivalence relations
> A relation that is reflexive, symmetric, and transitive.

roughly means "the same".

#### Equivalence class
> Let ~ be an equivalence relation on a set A. For any a ∈ A, the equivalence
> class of a with respect to ~ is the set
> [ a ] = { x ∈ A | x ~ a}

- every element is contained in its own equivalence class
- equivalence classes cannot be empty
- equivalence classes are sets: we prove they are equal by proving LHS ⊆ RHS and RHS ⊆ LHS

### Partial order
> A relation that is reflexive, anti-symmetric and transitive is called a partial order.

- tells us which of two elements "comes first"
- "poset" = partially ordered set

#### Hasse Diagram
- shows a partial order on a finite set
- if two sets S and T are related then we place S further down the page than T and draw a line between them
- don't draw loops
- don't draw lines that can be attained by transitivity

### Definitions in relation to partial order
**Maximal**

> If it is related to no element except itself, i.e. has nothing above it.

**Greatest**

> If every element is related to it, i.e. it is 'greater than' or equal everything else.

* any greatest element is maximal
* there is only one greatest element (if any)
* if there is a unique maximal element, then it is greatest

**Minimal**

If no element except itself is related to it, i.e. has nothing below it.

**Least**

If it is related to every element, i.e. 'less than' or equal to everything

* any least element is minimal
* there is only one least element (if any)
* if there is a unique minimal element, then it is least

### Low and upper bound for partial order
* most often asked to determine after sketching a Hasse diagram (which makes it easier)

The *greatest lower bound* of a and b is glb(a, b)

The *least upper bound* of a and b is lub(a, b)

(I rarely see them referred to as glb and lub, however.)
