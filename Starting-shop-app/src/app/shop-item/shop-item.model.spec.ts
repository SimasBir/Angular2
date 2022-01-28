import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemModel } from './shop-item.model';

describe('ShopItemModel', () => {
  let component: ShopItemModel;
  let fixture: ComponentFixture<ShopItemModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopItemModel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
