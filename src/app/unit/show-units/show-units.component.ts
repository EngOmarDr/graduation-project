import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CardComponent } from '../../../components/card-form.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface Branch {
  id: string;
  unitName: string;
  code: string;
  baseUnit: string | null;
  fact: number | null;
  isDef: boolean|null;
}

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-show-units',
  imports: [
    CardComponent,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  templateUrl: './show-units.component.html',
  styleUrl: './show-units.component.css',
})
export class ShowUnitsComponent {
  displayedColumns: string[] = [
    '#',
    'unit name',
    'code',
    'base unit',
    'fact',
    'is default',
    'action',
  ];
  dataSource: MatTableDataSource<Branch>;
  form = new FormGroup({
    filter: new FormControl(''),
  });

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editBranch(branch: Branch) {
    alert(`Edit Branch: ${branch.id}`);
  }

  deleteBranch(branch: Branch) {
    alert(`delete Branch: ${branch.id}`);
    this.dataSource.data = this.dataSource.data.filter(
      (u) => u.id !== branch.id
    );
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): Branch {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    unitName: name,
    code: name,
    baseUnit: name,
    fact: 500,
    isDef: false,
  };
}
