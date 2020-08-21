/**
 * @description - Function to retrieve userInfo
 */
export const userInfo = () => {
const userData = JSON.parse(localStorage.getItem('userInfo') as any);
const userRoles = JSON.parse(localStorage.getItem('userRoles') as any);
const userInfo={
   name: userData && userData.info && userData.info.displayName,
   userId:userData && userData.info && userData.info.id,
   userRoleId:userData && userData.userTypeId,
   userRole:userData && userData.userType,
   contactNumber:userData && userData.info && userData.info.contactNumber,
   emailId:userData && userData.info && userData.info.emailId,   
   profileImage:userData && userData.info && userData.info.profileImage,
   kycUploaded:userData && userData.info && userData.info.kycUploaded,
   kycStatus:userData && userData.info && userData.info.kycStatus,
   type:userData && userData.info && userData.info.type,   
   userTypeName:userData && userData.userType,
   userRoles:userRoles||[],
}
     return userInfo;
  };