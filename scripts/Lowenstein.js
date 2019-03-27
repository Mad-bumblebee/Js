export default function low(str1, str2) {

    var S1 = str1.split('');
    var S2 = str2.split('');

    var M = S1.length, N = S2.length;

    if (S1 === S2) return 0;
    if (M == 0 || N == 0) return Math.max(M,N);
                
        for(var matrix = [], i = M + 1; i; matrix[--i] = [i]);
    
        for(let i = N + 1; matrix[0][--i] = i;);
    
        for(let i = -1; ++i < M;){
    
            for(let j = -1; ++j < N;){
    
                matrix[(i *= 1) + 1][(j *= 1) + 1] = Math.min(matrix[i][j + 1] + 1, matrix[i + 1][j] + 1, matrix[i][j] + (S1[i] != S2[j]));    
            }
        }   

        console.log(matrix);
        
        return matrix[M][N];   
    }
    