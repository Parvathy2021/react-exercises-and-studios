export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://www.google.com/books/edition/Long_Island_Compromise/nqftEAAAQBAJ?hl=en&gbpv=1&printsec=frontcover";
   let book2 = "https://www.google.com/books/edition/Funny_Story/m9PMEAAAQBAJ?hl=en&gbpv=1&printsec=frontcover";
   let book3 = "https://www.google.com/books/edition/First_Lie_Wins/bDi4EAAAQBAJ?hl=en&gbpv=1&printsec=frontcover";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Long Island Compromise by Taffy Brodesser-Akner" />
         <img src={book2} alt="Funny Story by Emily Henry" />
         <img src={book3} alt="First Lie Wins: Reese's Book Club Pick (A Novel) by Ashley Elston" />
      </div>      
   );
}