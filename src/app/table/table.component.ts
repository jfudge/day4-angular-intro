import { Component, OnInit } from "@angular/core";
import { data } from "../mock-service/data";
import Book from "../mock-service/book.interface";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  constructor() {}

  // Set the data as a property so that it can be accessed by table.component.html
  books: Book[] = data;

  ngOnInit(): void {}
}
