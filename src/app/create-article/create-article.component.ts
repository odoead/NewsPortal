import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Article } from '../Data/article.model';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { ArticleParts } from '../Data/articleParts';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [ReactiveFormsModule, MatCommonModule, CommonModule, DragDropModule],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent implements OnInit {

  articleForm!: FormGroup;
  contentTypes = [
    { value: 'text', label: 'Text' },
    { value: 'image', label: 'Single Image' },
    { value: 'imageList', label: 'Image List' },
    { value: 'carousel', label: 'Image Carousel' },
    { value: 'video', label: 'Video' },
    { value: 'table', label: 'Data Table' }
  ];

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.initForm();



    this.articleForm.statusChanges.subscribe(status => {
      console.log('Stat form:', status);
      console.log('Invald:', this.getInvalidControls());
    });
  }

  initForm() {

    this.articleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      image: ['', Validators.required],
      date: [new Date(), Validators.required], category: ['', Validators.required],
      popularity: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      tags: this.fb.array([this.createTagControl()]),

      authorInfo: this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        image: ['', [Validators.required]],
        description: ['', [Validators.required]]
      }),

      summary: this.fb.array([this.createSummaryControl()]),
      tableOfContents: this.fb.array([this.createSectionControl()]),
      parts: this.fb.array([this.createPartControl()]),

    })

  }

  createTagControl(): FormGroup {
    return this.fb.group({ tag: ['', Validators.required] })
  }
  createSectionControl() {
    return this.fb.group({
      section: ['', Validators.required]
    });
  }

  createSummaryControl() {
    return this.fb.group({
      points: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      cardName: ['', Validators.required],
      cardData: ['', Validators.required]
    })
  }

  //create dynamicly controlled form fields depending on requested type
  createPartControl(type: string = 'text') {
    const basicControls = this.fb.group<
      { type: FormControl<string | null>; title: FormControl<string | null>;[key: string]: AbstractControl<any, any>; }>(
        {
          type: this.fb.control(type, Validators.required),
          title: this.fb.control('', Validators.required)
        });

    switch (type) {
      case ArticleParts.Text:
        basicControls.addControl('data', this.fb.control('', Validators.required));
        break;

      case ArticleParts.Image:
        basicControls.addControl('data', this.fb.group({
          url: ['', Validators.required],
          alt: [''],
          caption: ['']
        }));
        break;

      case ArticleParts.Video:
        basicControls.addControl('data', this.fb.group({
          url: ['', Validators.required],
          caption: ['']
        }));
        break;

      case ArticleParts.Carousel:
        basicControls.addControl('data', this.fb.array([this.createImageControl()]));
        break;

      case ArticleParts.Table:
        basicControls.addControl('data', this.fb.group({
          columns: this.fb.array([this.createColumnControl()]),
          rows: this.fb.array([this.createRowControl([])])
        }));
        break;
    }

    return basicControls;
  }

  createImageControl(): FormGroup {
    return this.fb.group({
      url: ['', Validators.required],
      alt: [''],
      caption: ['']
    });
  }

  createColumnControl(): FormGroup {
    return this.fb.group({
      key: ['', Validators.required],
      label: ['', Validators.required]
    });
  }

  createRowControl(columns: any[] = []): FormGroup {
    const row = this.fb.group({});

    // If we have columns, create form controls for each column
    if (columns && columns.length > 0) {
      columns.forEach(col => {
        row.addControl(col.key, this.fb.control(''));
      });
    }

    return row;
  }


  get tagsArray(): FormArray {
    return this.articleForm.get('tags') as FormArray;
  }

  get tableOfContentsArray(): FormArray {
    return this.articleForm.get('tableOfContents') as FormArray;
  }

  get summaryArray(): FormArray {
    return this.articleForm.get('summary') as FormArray;
  }

  get partsArray(): FormArray {
    return this.articleForm.get('parts') as FormArray;
  }

  getImagesArray(partIndex: number): FormArray {
    return this.partsArray.at(partIndex).get('data') as FormArray;
  }

  getColumnsArray(partIndex: number): FormArray {
    return (this.partsArray.at(partIndex).get('data') as FormGroup).get('columns') as FormArray;
  }

  getRowsArray(partIndex: number): FormArray {
    return (this.partsArray.at(partIndex).get('data') as FormGroup).get('rows') as FormArray;
  }
  // Add new items to form arrays
  addTag(): void {
    this.tagsArray.push(this.createTagControl());
  }

  addSection(): void {
    this.tableOfContentsArray.push(this.createSectionControl());
  }

  addSummary(): void {
    this.summaryArray.push(this.createSummaryControl());
  }

  addPart(type: string = 'text'): void {
    this.partsArray.push(this.createPartControl(type));
  }

  addImage(partIndex: number): void {
    this.getImagesArray(partIndex).push(this.createImageControl());
  }

  addColumn(partIndex: number): void {
    this.getColumnsArray(partIndex).push(this.createColumnControl());
  }

  addRow(partIndex: number): void {
    const columns = this.getColumnsArray(partIndex).value;
    this.getRowsArray(partIndex).push(this.createRowControl(columns));
  }

  // Remove items from form arrays
  removeTag(index: number): void {
    if (this.tagsArray.length > 1) {
      this.tagsArray.removeAt(index);
    }
  }

  removeSection(index: number): void {
    if (this.tableOfContentsArray.length > 1) {
      this.tableOfContentsArray.removeAt(index);
    }
  }

  removeSummary(index: number): void {
    if (this.summaryArray.length > 1) {
      this.summaryArray.removeAt(index);
    }
  }

  removePart(index: number): void {
    if (this.partsArray.length > 1) {
      this.partsArray.removeAt(index);
    }
  }

  removeImage(partIndex: number, imageIndex: number): void {
    const imagesArray = this.getImagesArray(partIndex);
    if (imagesArray.length > 1) {
      imagesArray.removeAt(imageIndex);
    }
  }

  removeColumn(partIndex: number, columnIndex: number) {
    const columnsArray = this.getColumnsArray(partIndex);

    if (columnsArray.length > 1) {
      columnsArray.removeAt(columnIndex);
      const columns = columnsArray.value;
      const rows = this.getRowsArray(partIndex);
      const rowValues = rows.value;

      rows.clear();

      rowValues.forEach((rowVal: any) => {
        const newRow = this.createRowControl(columns);
        columns.forEach((col: any) => {
          if (rowVal[col.key]) {
            newRow.get(col.key)?.setValue(rowVal[col.key]);
          }
        });
        rows.push(newRow);
      });
    }
  }

  removeRow(partIndex: number, rowIndex: number): void {
    const rowsArray = this.getRowsArray(partIndex);
    if (rowsArray.length > 1) {
      rowsArray.removeAt(rowIndex);
    }
  }

  onPartTypeChange(partIndex: number, newType: string): void {
    const currentPart = this.partsArray.at(partIndex);
    const title = currentPart.get(['title'])?.value;

    this.partsArray.removeAt(partIndex);
    this.partsArray.insert(partIndex, this.createPartControl(newType));

    //Restore title
    this.partsArray.at(partIndex).get('title')?.setValue(title);
  }


  dropPart(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.partsArray.controls, event.previousIndex, event.currentIndex);
  }

  dropImage(partIndex: number, event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.getImagesArray(partIndex).controls,
      event.previousIndex,
      event.currentIndex
    );
  }

  dropTag(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tagsArray.controls, event.previousIndex, event.currentIndex);
  }

  dropSection(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tableOfContentsArray.controls, event.previousIndex, event.currentIndex);
  }

  dropSummary(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.summaryArray.controls, event.previousIndex, event.currentIndex);
  }

  dropColumn(partIndex: number, event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.getColumnsArray(partIndex).controls, event.previousIndex, event.currentIndex);

    // Update rows when columns are reordered
    const columns = this.getColumnsArray(partIndex).value;
    const rows = this.getRowsArray(partIndex);
    const rowValues = rows.value;

    rows.clear();

    rowValues.forEach((rowData: any) => {
      const newRow = this.createRowControl(columns);
      columns.forEach((col: any) => {
        if (rowData[col.key]) {
          newRow.get(col.key)?.setValue(rowData[col.key]);
        }
      });
      rows.push(newRow);
    });
  }

  dropRow(partIndex: number, event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.getRowsArray(partIndex).controls,
      event.previousIndex,
      event.currentIndex
    );
  }


  // Helper to mark all controls as touched for validation display
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else if (control instanceof FormArray) {
        control.controls.forEach((c) => {
          if (c instanceof FormGroup) {
            this.markFormGroupTouched(c);
          } else {
            c.markAsTouched();
          }
        });
      }
    });
  }




  onSubmit(): void {
    if (this.articleForm.invalid) {
      this.markFormGroupTouched(this.articleForm);
      return;
    }

    // Transform form data to match Article model
    const formValue = this.articleForm.value;

    // Transform tags array
    const tags = formValue.tags.map((t: any) => t.tag);

    // Transform tableOfContents array
    const tableOfContents = formValue.tableOfContents.map((s: any) => s.section);

    // Create the article object
    const article: Article = {
      ...formValue,
      tags,
      tableOfContents
    };

    // Simulate server submission
    alert('Article created successfully:\n' + JSON.stringify(article, null, 2));
  }


  getInvalidControls(): { path: string; errors: any }[] {
    const invalidControls: { path: string; errors: any }[] = [];

    //for each form
    const checkForm = (form: FormGroup | FormArray, path: string = '') => {
      //get list of all input form  names
      Object.keys(form.controls).forEach(key => {
        console.log(key);
        console.log(form.get(key));

        const control = form.get(key);
        const controlPath = path ? `${path}.${key}` : key;

        if (control instanceof FormGroup || control instanceof FormArray) {
          checkForm(control, controlPath);
        } else if (control && control.invalid) {
          invalidControls.push({ path: controlPath, errors: control.errors });
        }
      });
    };

    checkForm(this.articleForm);
    return invalidControls;
  }

  clearForm(formDirective: FormGroupDirective) {
    formDirective.resetForm();
    this.articleForm.reset();

    this.initForm();

  }
}
















