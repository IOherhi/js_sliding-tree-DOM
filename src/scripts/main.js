'use strict';

const tree = document.body.querySelector('tree')
const childrens = tree.children;

const Ul01 = childrens[0].querySelector('ul');
const Ul02 = childrens[1].querySelector('ul');

const Ul01Array = Array.from(Ul01.children);

Ul01Array.forEach((item) =>
  item.onclick((e) => {
    Array.from(e.currentTarget.children).forEach((i) => {
        if (i.style.display === 'none') {
          i.setAttribute('display', 'block');
        } else {
          i.style.display = 'none';
        }
    })
  })
);
