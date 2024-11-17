---
title: "First Blogpost"
description: "My first blog post here and some testing stuff"
pubDate: "Nov 17 2024"
published: true
heroImage: "/src/assets/First_post.png"
tags: ["init"]
---

Hello there, this is my first post in this blog as u might seen I'm not very good at front end engineering nor the web in general but I do try my best so forgive me okay?? and here's some test I want to run on this first posts

## Code 

single line test

```python
print("hello world!")
```

multiple line test

```python
"""
Round Robin is a scheduling algorithm.
In Round Robin each process is assigned a fixed time slot in a cyclic way.
https://en.wikipedia.org/wiki/Round-robin_scheduling
"""

from __future__ import annotations

from statistics import mean


def calculate_waiting_times(burst_times: list[int]) -> list[int]:
    """
    Calculate the waiting times of a list of processes that have a specified duration.

    Return: The waiting time for each process.
    >>> calculate_waiting_times([10, 5, 8])
    [13, 10, 13]
    >>> calculate_waiting_times([4, 6, 3, 1])
    [5, 8, 9, 6]
    >>> calculate_waiting_times([12, 2, 10])
    [12, 2, 12]
    """
    quantum = 2
    rem_burst_times = list(burst_times)
    waiting_times = [0] * len(burst_times)
    t = 0
    while True:
        done = True
        for i, burst_time in enumerate(burst_times):
            if rem_burst_times[i] > 0:
                done = False
                if rem_burst_times[i] > quantum:
                    t += quantum
                    rem_burst_times[i] -= quantum
                else:
                    t += rem_burst_times[i]
                    waiting_times[i] = t - burst_time
                    rem_burst_times[i] = 0
        if done is True:
            return waiting_times


def calculate_turn_around_times(
    burst_times: list[int], waiting_times: list[int]
) -> list[int]:
    """
    >>> calculate_turn_around_times([1, 2, 3, 4], [0, 1, 3])
    [1, 3, 6]
    >>> calculate_turn_around_times([10, 3, 7], [10, 6, 11])
    [20, 9, 18]
    """
    return [burst + waiting for burst, waiting in zip(burst_times, waiting_times)]


if __name__ == "__main__":
    burst_times = [3, 5, 7]
    waiting_times = calculate_waiting_times(burst_times)
    turn_around_times = calculate_turn_around_times(burst_times, waiting_times)
    print("Process ID \tBurst Time \tWaiting Time \tTurnaround Time")
    for i, burst_time in enumerate(burst_times):
        print(
            f"  {i + 1}\t\t  {burst_time}\t\t  {waiting_times[i]}\t\t  "
            f"{turn_around_times[i]}"
        )
    print(f"\nAverage waiting time = {mean(waiting_times):.5f}")
    print(f"Average turn around time = {mean(turn_around_times):.5f}")
```

So I definitely will work more on this code block, btw this is where I stole the python code [round_robin.py](https://github.com/TheAlgorithms/Python/blob/master/scheduling/round_robin.py).

And as u might guess this is `ayu-dark` the same as one I use on my code editor.

OOOH MY GODD I just opened this post in chrome (I primarily use Firefox) this long code block looks terrible in chrome, will work on it later... sorry for chrome users 🙏.

## Math support

I use Katex, if you ask why not mathjax it's because katex tutorial is the first thing I see on google.

```math
E = mc^2
```

I want to test bla bla bla like this $2 \times 3$ oh okay it also works inline which is nice.

another random math from google, yes because I haven't learn latex well enough to type it on my own, sorry...

```math
L = \frac{1}{2} \rho v^2 S C_L
```

```math
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} \equiv 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
```

```math
\int u \frac{dv}{dx}\,dx=uv-\int \frac{du}{dx}v\,dx 
```

even tho I'll rarely use this math support (not really sure) but it nice to have it.

## Future Plans

I have some couple feature I want to add I'll list it here

- Table Of Content
- Next and Previous Post button
- Nicer UI blog in general

I guess that's it see u later.

And btw cool pic from this blog template

![earth]($assets/earth.jpg)