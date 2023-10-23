const Pool = requre('pg').Pool
const pool = new Pool({
    user: 'pxtfnuiunqylqt',
    host: 'ec2-35-169-9-79.compute-1.amazonaws.com', 
    database: 'denh9ihtjut7gi',
    password: '120b612879679e1bcbe878a83d862531aee14015a25921276ad66a20ab45a0f7',
    port: 5432,
})