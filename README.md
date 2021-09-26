# codeFrontend_hapiPet

LƯU Ý BEST PRACTICE DÙNG GIT

Các nhánh tên chữ thường, dùng snake_case

-main- 
là nhánh chính, hạn chế chỉnh sửa thường xuyên. Thường thì chỉ có -test- mới được quyền tạo pull request vào -main-

-test- 
là nhánh bậc 2, mọi tính năng mới phải pull request vô đây để test kỹ trước khi ghép vô -main-

-develop- (optional) 
là nhánh bậc 2.5, khá giống test nhưng dùng chứa code đang thay đổi liên tục, không kịp để test. Nếu dùng thì mọi code pull request vào nhánh này, rồi chốt 1 phiên bản tạo pull request qua test

-optionalcode_do_somthing- 
là nhánh bậc 3, do người dùng tự quản. Code tùy trello, jira nó cho. Tùy vào dùng -develop- hay không, sau khi xong tạo pull request vào -develop- hoặc thẳng -test-