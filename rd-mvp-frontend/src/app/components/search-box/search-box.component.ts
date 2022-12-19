import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
    @Input() title: string;
    searchText: string;
    @Output() textUpdated: EventEmitter<string> = new EventEmitter();
    constructor() {}

    ngOnInit(): void {}

    clearSearch() {
        this.searchText = '';
        this.searchUpdated();
    }

    searchUpdated() {
        this.textUpdated.emit(this.searchText);
    }
}
