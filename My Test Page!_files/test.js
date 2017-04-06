// // finding  longest password string

// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

// function solution(A) {
//     var longestPassword = -1;
//     var currentPassword = [];
//     var currentPasswordValid = false;

//     for(var i = 0; i < A.length; i++) {
//         if(A[i].match(/[a-z]/)) {
//             currentPassword.push(A[i]);
//         } else if(A[i].match(/[A-Z]/) && isNaN(A[i+1])) {
//             currentPassword.push(A[i]);
//             currentPasswordValid = true;
//         } else {
//             checkForLongestAndReset();
//         }
//     }

//     checkForLongestAndReset();

//     function checkForLongestAndReset() {
//         if( currentPasswordValid ) {
//             longestPassword = Math.max(currentPassword.length, longestPassword);
//             console.log('l', longestPassword)
//             console.log('c',currentPassword)
//         }
//         currentPasswordValid = false;
//         currentPassword = [];
//     }
//     return longestPassword;
// }


// solution('BabB0Ba');

// // function solution(X, Y, A) {
// //     var N = A.length;
// //     var result = -1;
// //     var nX = 0;
// //     var nY = 0;
// //     for (var i = 0; i < N; i++) {
// //         if (A[i] == X)
// //             nX += 1;
// //         else if (A[i] == Y)
// //             nY += 1;
// //         if (nX == nY)
// //             result = i;
// //     }
// //     return result;
// // }

// // solution (7, 42, [6, 42, 11, 7, 1, 42])




var factorial = []
function facto(num) {
    for(var i=0; i<=num; i++) {
        if(num%i == 0) {
           factorial.push(i);
        }

    }
    console.log('facto', factorial);
}

facto(0);


























