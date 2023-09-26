import { DeleteUserUseCase } from '../../../../application/useCase/user/delete-user-usecase';
import { MockUserRepository } from '../../../factory/repository';


describe('DeleteUserUseCase', () => {
  const mockUserRepository = new MockUserRepository()
  it('should delete a user successfully', async () => {
    const userId = '46ee5477-a000-40f3-af26-e39f734b8546';
    const deleteUserUseCase = new DeleteUserUseCase(mockUserRepository);

    mockUserRepository.delete = jest.fn().mockResolvedValue(true);

    const deletedAt = await deleteUserUseCase.execute(userId);

    expect(mockUserRepository.delete).toHaveBeenCalledWith(userId);
  });

  it('should throw an error if user deletion fails', async () => {
    const userId = '46ee5477-a000-40f3-af26-e39f734b8546';
    const deleteUserUseCase = new DeleteUserUseCase(mockUserRepository);

    mockUserRepository.delete = jest.fn().mockResolvedValue(false);

    await expect(deleteUserUseCase.execute(userId)).rejects.toThrow('Error to delete a user');
  });
});
