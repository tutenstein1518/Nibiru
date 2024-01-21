// // react
// import { FC } from "react";

// // propsTypes
// interface IProps {
//   cart: any[];
//   itemsPerPage: number;
//   setCurrentPage: (value: number) => void;
//   currentPage: number;
// }

// export const Pagination: FC<IProps> = ({
//   cart,
//   itemsPerPage,
//   setCurrentPage,
//   currentPage,
// }) => {
//   let pageNumbers: number[] = [];
//   for (let i = 1; i <= Math.ceil(cart.length / itemsPerPage); i++) {
//     pageNumbers = pageNumbers.concat(i);
//   }

//   // scrollToTop
//   const scrollToTop = () => {
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="pagination">
//       {pageNumbers.map((number) => (
//         <button
//           style={{ backgroundColor: currentPage === number ? "#0B666A" : "" }}
//           key={number}
//           onClick={() => {
//             setCurrentPage(number);
//             scrollToTop();
//           }}
//         >
//           {number}
//         </button>
//       ))}
//     </div>
//   );
// };
// // scss
// import "./index.scss";
// // components
// import { Cart  } from "../../enteties/ui/main/cart-Item";
// // types
// import { IMapItems } from "../../types/listMap
// // react
// import { useState } from "react";

// export const ListMap = (props: IMapItems) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(15);

//   // Вычисляем индекс Последнего элемента
//   const indexOfLastItem = currentPage * itemsPerPage;
//   console.log(indexOfLastItem);
//   // Вычисляем индекс Первого элемента
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   console.log(indexOfFirstItem);
//   // Фильтруем массив, ограничиваем количество элементов от index 0 до 15
//   const currentItems = props.items.slice(indexOfFirstItem, indexOfLastItem);
//   // Pagination
//   const Pagination = () => {
//     let pageNumbers: any[] = [];
//     for (let i = 1; i <= Math.ceil(props.items.length / itemsPerPage); i++) {
//       pageNumbers = pageNumbers.concat(i);
//     }
//     return (
//       <div className="pagination">
//         {pageNumbers.map((number) => (
//           <button key={number} onClick={() => setCurrentPage(number)}>
//             {number}
//           </button>
//         ))}
//       </div>
//     );
//   };
//   return (
//     <>
//       <div className="cards">
//         {currentItems.map((cart) => (
//           <Cart key={cart.id} item={cart} />
//         ))}
//       </div>
//       <Pagination />
//     </>
//   );
// };
