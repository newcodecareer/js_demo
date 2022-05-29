{console. log("hello world 2")

var something = 'abc'
console. log(something)

let firstname = "Ray", lastname = "Guan"
firstname = undefined
firstname = null
console.log(firstname);}

{
    let a = 1
    console.log(a);
    let b = 'this is a b'
    let b_1 = "this is a b_1"
    let b_3 = 'he said:"sdaasdf"'
    let b_4 = 'he said:'




    let c = 1
    let d = undefined
    let e = null

    if(c){
        console.log("good");
    } else if(d) {
        console.log("bad");
    } else if (e) {
        console.log("ok");
    }
}


{
    let obj = {
        name: "ray",
        age: 11,
        income: 22
    }

    console.log(obj)
    console.table(obj)
}


{
    let obj = {
        name: "ray",
        age: 11,
    }

    let obj_2 = obj
    obj_2.age = 22
    console.log(obj, obj_2)

    let obj_3 = {...obj}
    obj_3.age = 44
    console.log(obj,obj_3);

    let user = {
        name : "tang",
        age : 11,
        profile : {
            cv: "http",
            id : 345678
        }
    }

    let user_2 = {...user}
    user_2.name = "emma"
    user_2.profile.id = 1112222
    console.log(user, user_2);

    
}


{
    let array = [1,2,3,"4",true, {name: "yang"}]
    console.log(array[6]);

    array [0] = "asdf"
    console.table(array);

    let array_1 = array
    array_1 [4] = false
    console.table(array);

    console.log(array.length);
    console.log(array[6]);
    array[100] = 77
    console.log(array[100]);
    console.log(array[100].name);

    array[101] = {}
    array[101].name = "tang"
    console.log(array[101])
}



{
    // const password = 'asdasd'
    // password = 'ddddssss'

    // const obj = {
    //     name = 'tyy'
    // }
}


{
    let x = 10
    let y = 3
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y);
    console.log(x ** y);
    console.log(Math.sqrt(100));
    console.log(x++);
    console.log(x);
    console.log(x--);
    console.log(x);
    console.log(++x);
    console.log(x);
    console.log(--x);
    console.log(x);
}

{
    let x = 10
    x +=5
    x -=5
    x *=5
    x **=5
    x /=5
    x %=5

    x ??=5
}

{

    let x= 1
    console.log(x> 1);
    console.log(x>= 1);
    console.log(x<1);
    console.log(x<= 1);

    console.log(x=1);
    console.log(x== 1);
    console.log(x===1);

    //==判断 值 是否相等  
    console.log(0 == false)
    console.log(0 !=false)
    //===justify type& value
    console.log(0 === false)
    console.log(0 !== false)


}


{
    let  points = 110
    if (points > 100) {
        console.log('gold')
    } else{
        console.log('silver')
    }

    console.log(points > 100 ? 'gold' : 'silver')
}

{
    console.log(true && true);


    console.log(0 || false);
    console.log(null || false);
    console.log(undefined || false);
    console.log( NaN || false);

    console. log(3 || false);
    console. log(3 || false);
    console. log(3 || 10);

    const port = 5566
    // const port = process.env.port    using in NODEJS 

    console.log(!true)
}