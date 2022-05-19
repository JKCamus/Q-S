/*
 * @Description:
 * @version:
 * @Author: camus
 * @Date: 2022-03-05 09:35:19
 * @LastEditors: camus
 * @LastEditTime: 2022-03-05 09:41:23
 */

function findCommonParent(oNode1, oNode2) {
  // 填充这里
  if (oNode1.contains(oNode2)) {
    return oNode1;
  } else if (oNode2.contains(oNode1)) {
    return oNode2;
  } else {
    return findCommonParent(oNode1.parentNode, oNode2);
  }
}

// 方法二
function findCommonParent(oNode1, oNode2) {
  // 填充这里
  while (!oNode1.contains(oNode2)) {
    oNode1 = oNode1.parentNode;
  }
  return oNode1;
}
