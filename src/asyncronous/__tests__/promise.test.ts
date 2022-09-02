import { fetchUser } from '../promise';

describe('promise', () => {
  it('promise test1', () => {
    return fetchUser(1).then((user) => {
      expect(user).toEqual({
        // user는 레퍼런스 타입으로, toBe 함수로 비교하면 안된다.
        id: 1,
        name: 'zmzhoi1',
      });
    });
  });

  it('promise test2', () => {
    return fetchUser(2).then((user) => {
      expect(user).toEqual({
        // user는 레퍼런스 타입으로, toBe 함수로 비교하면 안된다.
        id: 2,
        name: 'zmzhoi2',
      });
    });
  });

  it('promise test3', () => {
    return expect(fetchUser(1)).resolves.toEqual({
      id: 1,
      name: 'zmzhoi1',
    });
  });

  // 아래는 async await 을 결합해서 테스트하는 방법 두 가지이다.
  it('promise test4', async () => {
    const user = await fetchUser(1);
    expect(user).toEqual({
      id: 1,
      name: 'zmzhoi1',
    });
  });
});

/**
 * Promise 를 사용한 코드도 비동기 코드이기 때문에
 * 비동기 코드가 존재한다는 것을 Jest에게 알려줘야 한다.
 * done 메소드를 사용하지 않고도 Promise 객체를 리턴만 해주면
 * Jest에게 비동기코드라는 존재한다는 것을 알려줄 수 있다.
 */
