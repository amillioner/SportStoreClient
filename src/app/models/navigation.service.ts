import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Repository } from '../models/repository';
import { filter } from "rxjs/operators";

@Injectable()
export class NavigationService {
    private handleNavigationChange() {
        let active = this.active.firstChild.snapshot;
        if (active.url.length > 0 && active.url[0].path === "store") {
            let category = active.params["category"];
            this.repo.filter.category = category || "";
            this.repo.getProducts();
        }
    }
    get categories(): string[] {
        return this.repo.categories;
    }
    get currentCategory(): string {
        return this.repo.filter.category || "";
    }
    set currentCategory(newCategory: string) {
        this.router.navigateByUrl(`/store/${(newCategory || "").toLocaleLowerCase()}`)
    }

    constructor(private repo: Repository,
        private router: Router,
        private active: ActivatedRoute) {
        router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(ev => this.handleNavigationChange());
    }
}