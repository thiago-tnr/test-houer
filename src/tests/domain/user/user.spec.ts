import UniqueEntityId from '../../../@seedwork/uniqueEntityId.vo'
import User, { UserProps } from '../../../domain/user/entity/user'
const userMock = {
  name: 'any_name',
  phone: 'any_phone',
  email: 'any_email@mail.com',
  document: 'any_document'
}
describe('User entity tests', () => {
  let user: User;
  beforeEach(() => {
    user = User.create(userMock);
  });
  it('should be create a user', () => {
    expect(user.id).toBeTruthy()
    expect(user.created_at).toBeInstanceOf(Date)
    expect(user.updated_at).toBeNull()
    expect(user).toMatchObject({
      name: 'any_name',
      phone: 'any_phone',
      email: 'any_email@mail.com',
      document: 'any_document'
    })
  })

  it('should change the user name', () => {
    user.changeName('Jane Doe');
    expect(user.name).toBe('Jane Doe');
  });


  it('should change the user document', () => {
    const newDocument = '67890';
    user.changeDocument(newDocument);
    expect(user.document).toBe(newDocument);
  });

  it('should change the user phone', () => {
    const newPhone = '9876543210';
    user.changePhone(newPhone);
    expect(user.phone).toBe(newPhone);
  });

  it('should change the user email', () => {
    const newEmail = 'jane@example.com';
    user.changeEmail(newEmail);
    expect(user.email).toBe(newEmail);
  });

  it('should activate admin status', () => {
    user.adminActivate();
    expect(user.is_admin).toBe(true);
  });

  it('should deactivate admin status', () => {
    user.adminDeactivate();
    expect(user.is_admin).toBe(false);
  });

  it.skip('should throw an error if an invalid email is provided', () => {
    const invalidEmail = 'invalid-email';
    expect(() => user.changeEmail(invalidEmail)).toThrowError(
      'Invalid email format'
    );
  });
})
