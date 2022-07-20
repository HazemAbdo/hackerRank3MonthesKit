// If a value appears even number of times, the result of XOR will be zero
// If the number of occurrences is odd, the result of XOR is, well, the value:
//--------------------------------------------------------------------------------
//every array with an odd number of elements results in XORing the values at 
//even indices because, again, odd indexed elements show up even number of times
//Array values:   1 2 3 4 5
//Times seen:     5 8 9 8 5
//indexes:        0 1 2 3 4
//-----------------------------------------------------
//every array with an even number of elements results in 0
//because each element appears even number of times
//Array values:   1 2 3 4
//Times seen:     4 6 6 4
function sansaXor(arr) {
  // Write your code here
  if (arr.length % 2 == 0) return 0;
  else {
    let x = 0;
    for (var i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        x ^= arr[i];
      }
    }
    return x;
  }
}
console.log(
  sansaXor([
    51199527, 8991803, 12451867, 67709770, 86180453, 51992908, 90887792,
    74988343, 33626929, 66048240, 48769208, 61026193, 88179097, 34199680,
    7459598, 44727919, 1923236, 35465802, 85045030, 90413698, 66740239,
    89551493, 3620030, 80995028, 3036416, 39497832, 59897145, 96869315,
    61218441, 18227059, 58408855, 12417968, 27218862, 70860723, 32644090,
    65915667, 75369983, 23531882, 40904010, 8996912, 89580122, 42189570,
    22539457, 77759219, 76389251, 29999055, 22487139, 78312487, 17981210,
    60048521, 21242537, 84721449, 49600015, 24862568, 18232829, 5152783,
    64360400, 78129974, 54538450, 25578841, 48873385, 12947306, 90513161,
    28608599, 36324381, 23157251, 94524266, 11694364, 99205485, 87944628,
    73207628, 88785607, 82650551, 95747086, 19061179, 59039802, 78262493,
    94064670, 89868641, 96243703,
  ])
);
console.log(
  sansaXor([
    11111178, 33481504, 56229558, 35973746, 51714333, 13898693, 52850499,
    82360660, 68437144, 78429340, 83750397, 81384450, 21458854, 12358997,
    70225183, 97132457, 59399615, 81919547, 96337943, 99860596, 7643527,
    37639902, 82511147, 3390613, 56701081, 41550949, 81653107, 50765751,
    31419590, 30413162, 57395295, 95047120, 16411019, 13624853, 83537219,
    68125352, 27523547, 36387718, 3002364, 95960691, 67333410, 86752762,
    29861493, 88792264, 51628111, 86676, 85924722, 11027726, 34522575, 82262665,
    10888322, 42166102, 19902567, 45915821, 98073068, 29120001, 87466770,
    32242527, 79885752, 71402712, 15172041, 37281047, 18966185, 31583060,
    3422253, 2503404, 52224765, 30945800, 38891122, 55227129, 79422843, 6224532,
    41979891, 9284336, 47533149, 93608002, 61887364, 33457871, 57152081,
    96409939, 68236888, 20556755, 91092393, 88139455, 66472577, 41681813,
    69775808, 6455699, 26440692, 49661561, 30374764,
  ])
);