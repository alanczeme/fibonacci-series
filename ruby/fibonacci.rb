def fibonacci(num)
  
  if num == 0 then return 0 end;
  if num == 1 then return 1 end;

  # Otherwise, if n>=2:
  nMinus2 = 0;
  nMinus1 = 1;
  sum = -1;

  while num >= 2 do
    sum = nMinus2+nMinus1
    nMinus2 = nMinus1
    nMinus1 = sum
    num--
  end

  return sum;
  
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
